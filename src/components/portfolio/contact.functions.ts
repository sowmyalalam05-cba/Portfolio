import { createServerFn } from "@tanstack/react-start";

const CONTACT_EMAIL = "sowmyalalam05@gmail.com";

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

function validateContactMessage(data: ContactMessage): ContactMessage {
  const name = data.name.trim();
  const email = data.email.trim().toLowerCase();
  const message = data.message.trim();

  if (name.length < 2 || name.length > 100) throw new Error("Enter a valid name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    throw new Error("Enter a valid email address.");
  }
  if (message.length < 10 || message.length > 5000) {
    throw new Error("Message must contain between 10 and 5000 characters.");
  }

  return { name, email, message };
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ??
      character,
  );
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(validateContactMessage)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("Email service is not configured.");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL],
        reply_to: data.email,
        subject: `Portfolio message from ${data.name}`,
        html: `
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected contact email", response.status, await response.text());
      throw new Error("Email delivery failed.");
    }

    return { success: true };
  });

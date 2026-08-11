export const OWNER = {
  name: "Sowmya Lalam",
  role: "Cybersecurity Analyst",
  email: "sowmyalalam05@gmail.com",
  linkedin: "https://linkedin.com/in/sowmya-lalam",
  github: "https://github.com/sowmyalalam05-cba",
  bio: "I am a passionate cybersecurity graduate student at the University of Maryland, Baltimore County, specializing in network security, threat analysis, and ethical hacking. I enjoy identifying vulnerabilities, securing systems, and building tools that enhance digital safety. My goal is to contribute to building secure and resilient systems in an increasingly connected world.",
};

export const SKILL_GROUPS = [
  {
    title: "Security Tools",
    items: [
      { name: "Wireshark", level: 90 },
      { name: "Metasploit", level: 80 },
      { name: "Nmap", level: 92 },
      { name: "Splunk", level: 78 },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "C", level: 70 },
      { name: "Bash", level: 82 },
    ],
  },
  {
    title: "Networking",
    items: [
      { name: "TCP/IP", level: 90 },
      { name: "DNS", level: 85 },
      { name: "Firewalls", level: 80 },
      { name: "VPN", level: 78 },
    ],
  },
  {
    title: "Security Concepts",
    items: [
      { name: "Vulnerability Assessment", level: 88 },
      { name: "Cryptography Basics", level: 75 },
      { name: "SIEM", level: 80 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Network Vulnerability Scanner",
    description:
      "Scans networks for open ports and fingerprints services to surface exploitable vulnerabilities with a prioritized risk report.",
    stack: ["Python", "Nmap", "Sockets"],
    href: "https://github.com/sowmyalalam05-cba/Network-Scanner.git",
  },
  {
    title: "Phishing Detection System",
    description:
      "Detects malicious URLs using machine-learning concepts and lexical feature extraction to flag phishing attempts in real time.",
    stack: ["Python", "scikit-learn", "Pandas"],
    href: "https://github.com/sowmyalalam05-cba/Phishing-Detection.git",
  },
  {
    title: "Password Strength Analyzer",
    description:
      "Evaluates password security against entropy and breach heuristics, then suggests concrete improvements to the user.",
    stack: ["Python", "Regex", "Entropy"],
    href: "https://github.com/sowmyalalam05-cba/Password_Analyzer.git",
  },
  {
    title: "SIEM Dashboard Simulation",
    description:
      "A simulated log monitoring dashboard that correlates events and raises alerts on suspicious authentication activity.",
    stack: ["Python", "Splunk", "Log Parsing"],
    href: "https://github.com/sowmyalalam05-cba/Simulation_dashboard.git",
  },
];

export const CERTIFICATIONS = [
  { name: "CompTIA Security+", issuer: "CompTIA", status: "In Progress" },
  { name: "Ethical Hacking Essentials", issuer: "EC-Council", status: "Completed" },
  { name: "Cybersecurity Fundamentals", issuer: "Coursera", status: "Completed" },
];

export const POSTS = [
  {
    title: "Understanding SQL Injection Attacks",
    excerpt:
      "How untrusted input reaches the query parser, what a payload really does, and the parameterization patterns that stop it.",
    tag: "AppSec",
    date: "Mar 2025",
    read: "6 min read",
  },
  {
    title: "Top 10 Cybersecurity Threats in 2025",
    excerpt:
      "From AI-assisted phishing to supply-chain compromise — the threat landscape defenders should be budgeting for this year.",
    tag: "Threat Intel",
    date: "Feb 2025",
    read: "8 min read",
  },
  {
    title: "How Password Cracking Works",
    excerpt:
      "Dictionary attacks, rainbow tables, and GPU brute force explained — plus why salted slow hashes still win.",
    tag: "Cryptography",
    date: "Jan 2025",
    read: "5 min read",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Terminal", href: "#terminal" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

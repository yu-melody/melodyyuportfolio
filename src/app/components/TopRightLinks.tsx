"use client";

import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

export default function TopRightLinks() {
  const links = [
    {
      href: "https://github.com/yu-melody",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/yumelody/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "/resume.pdf",
      label: "Resume",
      icon: <FaFilePdf />,
    },
  ];

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            border: "1px solid #ccc",
            borderRadius: "50%",
            color: "#555",
            textDecoration: "none",
            fontSize: "1.2rem",
            transition: "background-color 0.2s ease, color 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#555";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#555";
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

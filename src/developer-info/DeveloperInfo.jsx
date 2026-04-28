import React, { useEffect, useState } from "react";

const DeveloperInfo = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // URL access ?dev=true
    const params = new URLSearchParams(window.location.search);
    if (params.get("dev") === "true") {
      setVisible(true);
    }

    // Keyboard shortcut CTRL + SHIFT + D
    const handleKey = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        setVisible(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h1 style={styles.title}>🚀 Developer Information</h1>
        <p style={styles.subtitle}>
            __
        </p>

        <div style={styles.section}>
          <h2>👨‍💻 Developer</h2>
          <p><b>Name:</b> Md Khaleeque Akhtar</p>
          <p><b>Role:</b> MERN Stack Developer & DevOps Engineer</p>
          <p><b>Specialization:</b> Full Stack Web Development, Automation, Cloud Deployment</p>
        </div>

        <div style={styles.section}>
          <h2>🛠️ Tech Stack</h2>
          <div>
            {["React", "Node.js", "MongoDB", "Express", "Docker", "CI/CD", "AWS", "Linux"].map((tech) => (
              <span key={tech} style={styles.tag}>{tech}</span>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h2>⚙️ Project Highlights</h2>
          <p>• Scalable MERN architecture</p>
          <p>• Clean & responsive UI design</p>
          <p>• API-driven backend systems</p>
          <p>• DevOps pipelines & automation</p>
        </div>

        <div style={styles.section}>
          <h2>📞 Contact</h2>
          <p><b>Portfolio:</b> 
            <a href="https://majdi-portfolio.vercel.app" target="_blank" rel="noreferrer" style={styles.link}>
              majdi-portfolio.vercel.app
            </a>
          </p>
        </div>

        <button style={styles.closeBtn} onClick={() => setVisible(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DeveloperInfo;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  },
  container: {
    background: "#0f172a",
    padding: "30px",
    borderRadius: "15px",
    width: "90%",
    maxWidth: "800px",
    color: "#fff",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)"
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "10px"
  },
  subtitle: {
    textAlign: "center",
    color: "#94a3b8",
    marginBottom: "20px"
  },
  section: {
    marginBottom: "20px"
  },
  tag: {
    display: "inline-block",
    background: "#38bdf8",
    color: "#000",
    padding: "5px 10px",
    borderRadius: "6px",
    margin: "5px",
    fontSize: "0.8rem"
  },
  link: {
    color: "#38bdf8",
    marginLeft: "5px"
  },
  closeBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    background: "#38bdf8",
    cursor: "pointer",
    borderRadius: "8px"
  }
};
import { useNavigate } from "react-router-dom";

export default function Grade8Topics() {
  const navigate = useNavigate();

  const topics = [
    { title: "🔁 While loop", path: "/grade8/while-intro" },
    { title: "🧠 Problem solving: While loop", path: "/grade8/problem-while" },
    { title: "🔂 For loop in Python", path: "/grade8/for-intro" },
    { title: "🧩 Problem solving: For loop", path: "/grade8/problem-for" },
    { title: "⛔ Loop control: Break & Continue", path: "/grade8/loop-break-continue" },
    { title: "📎 Loop control: Else clause", path: "/grade8/loop-else" },
    { title: "⚙️ Loop control: Practice", path: "/grade8/loop-practice" },
    { title: "🧮 Problem solving: Loops in Python", path: "/grade8/problem-loops" },
    { title: "🔍 Tracing an algorithm", path: "/grade8/tracing" },
    { title: "✅ Check yourself", path: "/grade8/check-yourself" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#FFD700",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>
        📘 Python тақырыптарын таңда
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {topics.map((topic, i) => (
          <button
            key={i}
            onClick={() => navigate(topic.path)}
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              padding: "0.75rem 1.25rem",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              textAlign: "left",
              boxShadow: "0 0 8px rgba(255, 215, 0, 0.3)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {topic.title}
          </button>
        ))}
      </div>
    </div>
  );
}
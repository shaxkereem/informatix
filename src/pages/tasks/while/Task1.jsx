import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/1.png";

export default function Task1({ onSuccess }) {
  const [answer, setAnswer] = useState("");
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const correctAnswer = "1\n2\n4";

  const handleCheck = () => {
    const normalized = answer.trim().replace(/\r/g, "").replace(/\n+/g, "\n");
    if (!normalized) {
      setOutput("⚠️ Жауапты енгізіңіз.");
      setIsCorrect(false);
      return;
    }
    if (["1\n2\n4", "1\r\n2\r\n4", "1\n2\n4\n"].includes(normalized)) {
      setOutput("✅ Дұрыс жауап! Жарайсың!");
      setIsCorrect(true);
      onSuccess?.();
    } else {
      setOutput("❌ Қате. Тағы да байқап көр!");
      setIsCorrect(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧮 Тапсырма 1</h1>
      <img src={img1} alt="Айдос есеп шығарып отыр" style={{ maxWidth: "300px", marginBottom: "1rem" }} />
      <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "1.2rem" }}>
        👦 <strong>Айдос — информатика сабағында.</strong><br />
        Ол ноутбугін ұмытып кеткен. Мұғалімі тақтаға мына кодты жазып берді. Айдос нәтиженің қандай болатынын болжауы керек.
      </p>
      <div style={{ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", fontSize: "1rem", color: "#FFD700", marginBottom: "1rem", userSelect: "none", pointerEvents: "none" }}>
        <pre>{`i = 1\nwhile i < 2 ** 3:\n    print(i)\n    i *= 2`}</pre>
      </div>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={5}
        style={{
          width: "100%",
          maxWidth: "500px",
          fontSize: "1rem",
          fontFamily: "monospace",
          backgroundColor: "#222",
          color: "#FFD700",
          padding: "1rem",
          border: "none",
          borderRadius: "10px",
          marginBottom: "1rem",
          lineHeight: "1.5",
          resize: "vertical"
        }}
      />

      <button onClick={handleCheck} style={buttonStyle}>📤 Тексеру</button>

      <div style={{ marginTop: "1rem", fontSize: "1.1rem", color: isCorrect ? "#0f0" : "#f33" }}>
        {output || "📥 Нәтиже осында шығады"}
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#FFD700",
  color: "#000",
  padding: "0.6rem 1.5rem",
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer"
};

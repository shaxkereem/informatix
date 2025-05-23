import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import img4 from "../../../assets/4.png";

export default function Task4({ onSuccess }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    if (!code.trim()) {
      setOutput("⚠️ Кодты жазыңыз.");
      setIsCorrect(false);
      return;
    }

    const normalized = code.replace(/\s/g, "");
    const hasSquare = normalized.includes("**2") || normalized.includes("*i*i") || normalized.includes("i**2");
    const usesWhile = code.includes("while");

    if (hasSquare && usesWhile) {
      setOutput("✅ Дұрыс! Барлық квадрат сандар табылды.");
      setIsCorrect(true);
      onSuccess?.();
    } else {
      setOutput("❌ Квадрат сандар үшін **2 қолданылуы тиіс және while циклі қажет.");
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    navigate("/grade8/while/5");
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧮 Тапсырма 4</h1>
      <img src={img4} alt="Айдос квадрат сандарды есептеп отыр" style={{ maxWidth: "300px", marginBottom: "1rem" }} />
      <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "1.2rem" }}>
        👦 <strong>Айдос</strong> N санына дейінгі барлық тақ сандардың <strong>квадраттарын</strong> табуы керек.
        <br />Кодты жазыңыз және тексеріңіз.
      </p>
      <div style={{ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", fontSize: "1rem", color: "#FFD700", marginBottom: "1rem", userSelect: "none", pointerEvents: "none" }}>
        <pre>{`# Мысал кіріс: N = 50\n# Күтілетін шығыс: 1 9 25 49`}</pre>
      </div>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[python()]}
        onChange={(val) => setCode(val)}
        theme="dark"
        style={{ marginBottom: "1rem", fontSize: "1rem" }}
      />
      <button onClick={handleCheck} style={buttonStyle}>📤 Тексеру</button>
      <div style={{ marginTop: "1rem", fontSize: "1.1rem", color: isCorrect ? "#0f0" : "#f33" }}>
        {output || "📥 Нәтиже осында шығады"}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: isCorrect ? "#FFD700" : "#333",
            color: isCorrect ? "#000" : "#FFD700",
            padding: "0.75rem 1.5rem",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "1rem",
            border: isCorrect ? "none" : "1px dashed #FFD700",
            cursor: "pointer"
          }}
        >
          ➡️ {isCorrect ? "Келесі тапсырма" : "Өткізіп жіберу"}
        </button>
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
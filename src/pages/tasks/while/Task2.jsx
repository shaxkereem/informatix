import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import img2 from "../../../assets/2.png";

export default function Task2({ onSuccess }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleCheck = () => {
    if (!code.trim()) {
      setOutput("⚠️ Кодты жазыңыз.");
      setIsCorrect(false);
      return;
    }

    const normalized = code.replace(/\s/g, "");
    const containsWhile = code.includes("while");
    const validLogic = normalized.includes("i=10") && normalized.includes("whilei>=0") && normalized.includes("i-=1");

    if (containsWhile && validLogic) {
      setOutput("✅ Дұрыс жауап!");
      setIsCorrect(true);
      onSuccess?.();
    } else {
      setOutput("❌ Қате. Қайта тексеріңіз.");
      setIsCorrect(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <img src={img2} alt="Айдос кодты тексеріп отыр" style={{ maxWidth: "300px", marginBottom: "1rem" }} />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧮 Тапсырма 2</h1>
      <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "1.2rem" }}>
        👦 <strong>Айдос</strong> цикл арқылы 10-нан 0-ге дейін кері санауды жоспарлап отыр. Төмендегі кодта қате бар.
        <br />Қатені түзетіп, дұрыс нәтиже шығатындай етіп цикл жаз.
      </p>
      <div style={{ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", fontSize: "1rem", color: "#FFD700", marginBottom: "1rem", userSelect: "none", pointerEvents: "none" }}>
        <pre>{`# Қате код\ni = 10\nwhile i == 0:\n    print(i)\n    i -= 1`}</pre>
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

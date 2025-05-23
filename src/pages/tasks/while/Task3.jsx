import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import img2 from "../../../assets/2.png";

export default function Task3({ onSuccess }) {
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
    const isFixed = normalized.includes("i+=1") || normalized.includes("i=i+1");
    const containsWhile = code.includes("while");

    if (containsWhile && isFixed) {
      setOutput("✅ Дұрыс! Енді цикл тоқтайды.");
      setIsCorrect(true);
      onSuccess?.();
    } else {
      setOutput("❌ Цикл әлі де мәңгілік. Өзгерісті толық енгіздің бе?");
      setIsCorrect(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧮 Тапсырма 3</h1>
      <img src={img2} alt="Айдос кодты жөндеп отыр" style={{ maxWidth: "300px", marginBottom: "1rem" }} />
      <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "1.2rem" }}>
        👦 <strong>Айдос</strong> цикл құрды, бірақ оны тоқтату шартын ұмытып кеткен.
        Бағдарлама мәңгі қайталанып жатыр. <strong>Циклды дұрыс аяқталатындай етіп өзгертіңіз.</strong>
      </p>
      <div style={{ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", fontSize: "1rem", color: "#FFD700", marginBottom: "1rem", userSelect: "none", pointerEvents: "none" }}>
        <pre>{`# Қате код\ni = 1\nwhile i < 10:\n    print(i)`}</pre>
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

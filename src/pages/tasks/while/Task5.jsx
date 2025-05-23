import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import useTimer from "../../../hooks/useTimer";
import EndPopup from "./EndPopup";
import img4 from "../../../assets/4.png";

export default function Task5({ onSuccess, score }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const navigate = useNavigate();
  const [finalTimeUsed, setFinalTimeUsed] = useState(null);

 

  const { timeLeft, formatTime } = useTimer(10, () => setShowPopup(true));
  const timeElapsed = 10 - timeLeft;
   useEffect(() => {
    if (timeLeft === 0) {
      setShowPopup(true);
    }
  }, [timeLeft]);

  const handleCheck = () => {
    if (!code.trim()) {
      setOutput("⚠️ Кодты жазыңыз.");
      setIsCorrect(false);
      return;
    }

    const normalized = code.replace(/\s/g, "");
    const logicOk = normalized.includes("x*=1.1") || normalized.includes("x=x*1.1");
    const loopOk = code.includes("while") && (code.includes("x < y") || code.includes("x<=y"));

    if (logicOk && loopOk) {
      setOutput("✅ Дұрыс! Айдос күн сайын 10% арттырды.");
      setIsCorrect(true);
      setCurrentScore(10);
      onSuccess?.();
    } else {
      setOutput("❌ 10% арттыру үшін while циклі мен x *= 1.1 логикасы қажет.");
      setIsCorrect(false);
    }
  };

  const handleFinish = () => {
    setFinalTimeUsed(formatTime(1800 - timeLeft));
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    navigate("/grade8/topics");
  };

  if (showPopup) {
    return (
      <EndPopup
        score={score}
        timeUsed={finalTimeUsed} // freeze time!
        onClose={handleClosePopup}
      />
    );
  }

  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧮 Тапсырма 5</h1>
      <img src={img4} alt="Айдос есеп шығарып отыр" style={{ maxWidth: "300px", marginBottom: "1rem" }} />
      <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "1.2rem" }}>
        👟 <strong>Айдос</strong> алғашқы күні <code>x</code> км жүгірді. Күн сайын қашықтығын <strong>10%</strong> арттырып отыр.
        <br />Берілген <code>y</code> мәніне жету үшін <strong>неше күн</strong> қажет екенін анықтайтын бағдарлама жаз.
      </p>
      <div style={{ backgroundColor: "#111", padding: "1rem", borderRadius: "10px", fontSize: "1rem", color: "#FFD700", marginBottom: "1rem", userSelect: "none", pointerEvents: "none" }}>
        <pre>{`# Кіріс: x = 10, y = 20\n# Шығыс: 9`}</pre>
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
          onClick={handleFinish}
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
          ✅ Аяқтау
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

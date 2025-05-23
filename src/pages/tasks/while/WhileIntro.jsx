import { useNavigate } from "react-router-dom";

export default function WhileIntro() {
  const navigate = useNavigate();

  const codeStyle = {
    backgroundColor: "#111",
    color: "#FFD700",
    padding: "1rem",
    borderRadius: "8px",
    whiteSpace: "pre",
    fontFamily: "monospace",
    fontSize: "1rem",
    marginBottom: "1rem",
  };

  const resultStyle = {
    backgroundColor: "#222",
    color: "#0f0",
    padding: "0.8rem",
    borderRadius: "8px",
    fontFamily: "monospace",
    marginBottom: "2rem",
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#FFD700",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.3rem", marginBottom: "1rem" }}>🔁 Тақырып: While loop</h1>

      <p style={{ color: "#ccc", marginBottom: "1rem" }}>
        <strong>Күнделікті жағдай:</strong>
      </p>
      <div style={{ backgroundColor: "#111", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
        👦 Али есік алдында тұр.<br />
        🔔 Ол есікке қоңырауды 3 рет басуы қажет.<br />
        🚪 Егер 3 рет шырылдаса — есік ашылады!<br />
        🧠 Бұл әрекетті автоматтандыру үшін <strong>while</strong> циклін пайдалануға болады.
      </div>

      <img
  src="https://tse3.mm.bing.net/th?id=OIP.luI85fhTd57qK6IqIHRTXQHaJv&pid=Api"
  alt="While loop схемасы"
  style={{
    width: "100%",
    maxWidth: "600px",
    margin: "2rem auto",
    display: "block",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)"
  }}
/>

      <p style={{ color: "#ccc" }}>Python тілінде бұл былай жазылады:</p>

      <pre style={codeStyle}>
{`count = 0
while count < 3:
    print("🔔")
    count += 1`}
      </pre>

      <div style={resultStyle}>
{`Нәтиже:
🔔
🔔
🔔`}
      </div>

      <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
        Бұл цикл 3 рет қайталанып, әр қайталауда "🔔" таңбасын шығарып отырады. <br />
        <strong>count</strong> айнымалысы 0-ден бастап артып отырады.
      </p>

      <p style={{ color: "#ccc", marginTop: "2rem" }}>⚠️ Ал егер шарт өзгермесе ше?</p>

      <pre style={codeStyle}>
{`while True:
    print("🔄")`}
      </pre>

      <div style={resultStyle}>
        Нәтиже: 🔄 🔄 🔄 🔄 ... (тоқтамайды)
      </div>

      <p style={{ color: "#ccc", marginBottom: "2rem" }}>
        Бұл — <strong>шексіз цикл</strong>. Сондықтан цикл қолданғанда шарттың өзгеруін қадағалау өте маңызды.
      </p>

      <button
        onClick={() => navigate("/grade8/while/1")}
        style={{
          backgroundColor: "#FFD700",
          color: "#000",
          fontWeight: "bold",
          padding: "1rem 2rem",
          fontSize: "1rem",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✅ Түсіндім
      </button>
    </div>
  );
}

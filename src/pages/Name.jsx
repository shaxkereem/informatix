import { useState } from "react";
import { Container, Button, Textarea } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { python } from "@codemirror/lang-python";

export default function Name() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [studentName, setStudentName] = useState("");
  const navigate = useNavigate();

  const handleRun = () => {
    const lines = code.split("\n");
    let name = "";

    lines.forEach((line) => {
      const match = line.match(/name\s*=\s*["'](.+)["']/);
      if (match) {
        name = match[1];
      }
    });

    if (name) {
      setStudentName(name);
      setOutput(`Сәлем, ${name}!`);
    } else {
      setOutput("Атыңды дұрыс енгізбедің.");
    }
  };

  const handleContinue = () => {
    if (studentName) {
      navigate("/minigame", { state: { name: studentName } });
    } else {
      alert("Алдымен Run арқылы атыңды енгіз.");
    }
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "2rem",
        color: "#fff",
      }}
    >
      <h1
        style={{
          color: "#FFD700",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Атыңды Python кодымен таныстыр!
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {/* Сол жақ панель — тапсырма */}
        <div
          style={{
            width: "45%",
            backgroundColor: "#111",
            padding: "1.5rem",
            borderRadius: "10px",
            border: "2px solid #FFD700",
          }}
        >
          <img
            src="/greet1.png"
            alt="Мұғалім"
            style={{
              width: "150px",
              borderRadius: "10px",
              border: "2px solid #FFD700",
              display: "block",
              margin: "0 auto 1rem",
            }}
          />
          <p style={{ fontWeight: "bold", color: "#FFD700" }}>👩‍🏫 Мұғалім:</p>
          <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Сәлем, оқушы! Бүгінгі тапсырма: өз атыңды Python тілінде код арқылы жаз.
            <br />
            <br />
            Мысалы:
            <div
              style={{
                backgroundColor: "#222",
                color: "#FFD700",
                fontFamily: "monospace",
                fontSize: "0.95rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                marginTop: "0.5rem",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              name = "Азамат"
            </div>
          </p>
        </div>

        {/* Ортаны бөлетін сызық */}
        <div
          style={{
            width: "2px",
            backgroundColor: "#FFD700",
            borderRadius: "10px",
          }}
        />

        {/* Оң жақ панель — редактор */}
        <div style={{ width: "45%" }}>
          <div
            style={{
              backgroundColor: "#222",
              padding: "1rem",
              borderRadius: "10px",
              marginBottom: "1rem",
            }}
          >
            <p style={{ color: "#ccc", marginBottom: "0.5rem" }}>💻 Код редакторы</p>
            <CodeMirror
              value={code}
              height="150px"
              theme={dracula}
              extensions={[python()]}
              onChange={(value) => setCode(value)}
            />
          </div>

          <div
          style={{
            backgroundColor: "#222",
            padding: "1rem",
            borderRadius: "10px",
            marginBottom: "1rem",
          }}
        >
          <p style={{ color: "#ccc", marginBottom: "0.5rem" }}>📜 Шығыс</p>

          <div
            style={{
              backgroundColor: "#111",
              border: "2px solid #FFD700",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "1rem",
              borderRadius: "10px",
              minHeight: "80px",
              display: "flex",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
            }}
          >
            {output || "Нәтиже мұнда шығады..."}
          </div>
        </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button
              onClick={handleRun}
              styles={{
                root: {
                  backgroundColor: "#FFD700",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "0.5rem 1.5rem",
                  fontSize: "1rem",
                  transition: "all 0.3s",
                  ":hover": {
                    backgroundColor: "#ffec3d",
                  },
                },
              }}
            >
              ▶️ Run
            </Button>

            <Button
              variant="filled"
              onClick={handleContinue}
              styles={{
                root: {
                  backgroundColor: "#FFD700",
                  color: "#000",
                  fontWeight: "bold",
                  padding: "0.5rem 1.5rem",
                  fontSize: "1rem",
                  transition: "all 0.3s",
                  ":hover": {
                    backgroundColor: "#ffec3d",
                  },
                },
              }}
            >
              ✔ Жалғастыру
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
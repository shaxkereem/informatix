import { Button, Container } from "@mantine/core";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* 🖼 Сурет — мәтіннің үстінде, орталықта */}
      <motion.img
        src="/greet1.png"
        alt="Greeting"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "16px",
          border: "4px solid #FFD700",
          marginBottom: "2rem",
          boxShadow: "0 0 12px rgba(255, 215, 0, 0.5)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#FFD700",
          marginBottom: "1.5rem",
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Сәлем, оқушы! 👋
      </motion.h1>

      <motion.p
        style={{
          fontSize: "1.2rem",
          color: "#ccc",
          maxWidth: "600px",
          marginBottom: "2rem",
          lineHeight: "1.8",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Бүгіннен бастап сен мектептегі информатика сабағында жаңа саяхатқа аттанасың!
        Алгоритмдерді зерттеп, программалау әлеміне алғашқы қадамдарыңды жасайсың.
        <br />
        <strong style={{ color: "#FFD700" }}>Дайынсың ба? Онда бастайық!</strong>
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button
          size="lg"
          radius="xl"
          color="yellow"
          onClick={() => navigate("/name")}
          styles={{
            root: {
              backgroundColor: "#FFD700",
              color: "#000",
              fontWeight: "bold",
              padding: "0.75rem 2rem",
              fontSize: "1.1rem",
              transition: "all 0.3s",
            },
          }}
        >
          Бастайық 🚀
        </Button>
      </motion.div>
    </Container>
  );
}
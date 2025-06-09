import React, { useState } from "react";
import Message from "./message";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simular respuesta del modelo (puedes reemplazar con una llamada a tu backend)
    setTimeout(() => {
      const botMessage = { sender: "bot", text: "Esta es una respuesta del asistente." };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #ccc",
      borderRadius: "8px",
      background: "#fff",
      padding: "10px",
      height: "500px",
      overflow: "hidden",
    },
    history: {
      flex: 1,
      overflowY: "auto",
      marginBottom: "10px",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    loading: {
      textAlign: "center",
      color: "#888",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.history}>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
        {isLoading && <div style={styles.loading}>Pensando...</div>}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Chat;
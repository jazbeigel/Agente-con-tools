import React from "react";

function Message({ sender, text }) {
  const styles = {
    message: {
      margin: "5px 0",
      padding: "10px",
      borderRadius: "8px",
      maxWidth: "80%",
      alignSelf: sender === "user" ? "flex-end" : "flex-start",
      backgroundColor: sender === "user" ? "#007bff" : "#f1f1f1",
      color: sender === "user" ? "white" : "#333",
    },
  };

  return (
    <div style={styles.message}>
      <p>{text}</p>
    </div>
  );
}

export default Message;
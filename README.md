# Entregable: Sistema de Gestión de Estudiantes con LLM Tools

Este proyecto es un entregable para implementar un sistema de gestión de estudiantes utilizando LLMs (Large Language Models) y Tools.

## 📚 Requisitos Previos

- Node.js >= 18
- [Ollama](https://ollama.com/) instalado y corriendo
- Modelo qwen3:1.7b instalado

## 🛠 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Asegúrate de tener Ollama corriendo y el modelo instalado:
```bash
ollama run qwen3:1.7b
```

## 🎯 Tu Tarea

Debes implementar las siguientes funcionalidades:

1. En `src/lib/estudiantes.js`:
   - Método `agregarEstudiante(nombre, apellido, curso)`
   - Método `buscarEstudiantePorNombre(nombre)`
   - Método `buscarEstudiantePorApellido(apellido)`
   - Método `listarEstudiantes()`

2. En `src/ejemplo-alumnos-tools.js`:
   - Tool `buscarPorNombre`
   - Tool `buscarPorApellido`
   - Tool `agregarEstudiante`
   - Tool `listarEstudiantes`

## 💡 Ayuda

- Cada método y Tool tiene comentarios TODO indicando dónde implementar el código
- Revisa la documentación de llamaindex para entender cómo funcionan las Tools
- Utiliza la clase `Estudiantes` para manejar los datos
- Las Tools deben usar los métodos de la clase `Estudiantes`

## 🚀 Para Ejecutar

```bash
npm start
```

## 📝 Notas

- El código base ya incluye:
  - Interfaz CLI funcional
  - Formateo de respuestas
  - Manejo básico de archivos
  - Estructura del proyecto

- No modifiques:
  - La estructura de los archivos
  - Los nombres de los métodos/Tools
  - Los parámetros definidos

## 📚 Recursos

- [Documentación de LlamaIndex](https://docs.llamaindex.ai/)
- [Documentación de Zod](https://zod.dev/)
- [Ejemplos de Tools](https://docs.llamaindex.ai/en/stable/examples/tools/)
"# guia-no-hay-nada-" 
"# -DaleCaraAlAsistente-" 


### Codigo extra:

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

import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fileData, setFileData] = useState("");

  const writeFile = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    alert("File written successfully");
  };

  const readFile = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.json();
    setFileData(data.content);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vite + React + fs (No Express)</h2>

      <textarea
        rows="4"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />

      <br /><br />

      <button onClick={writeFile}>Create / Write</button>
      <button onClick={readFile} style={{ marginLeft: "10px" }}>
        Read
      </button>

      <h3>File Content</h3>
      <pre>{fileData}</pre>
    </div>
  );
}

export default App;

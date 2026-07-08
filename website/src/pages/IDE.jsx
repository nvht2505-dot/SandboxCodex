import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Terminal from "../components/Terminal";

export default function IDE() {
  const [current, setCurrent] = useState("index.html");

  const [files, setFiles] = useState({
    "index.html": `<h1>Sandbox CodeX</h1>
<p>Hello World</p>`,

    "style.css": `body{
margin:0;
background:#0f172a;
color:white;
font-family:Arial;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

h1{
color:#7c5cff;
}`,

    "script.js": `console.log("Sandbox CodeX");`,
  });

  const preview = `
<!DOCTYPE html>
<html>
<head>
<style>${files["style.css"]}</style>
</head>
<body>
${files["index.html"]}
<script>
${files["script.js"]}
</script>
</body>
</html>`;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr 1fr",
        gridTemplateRows: "1fr 220px",
        height: "100vh",
      }}
    >
      <Sidebar current={current} setCurrent={setCurrent} />

      <Editor
        language={
          current.endsWith(".css")
            ? "css"
            : current.endsWith(".js")
            ? "javascript"
            : "html"
        }
        code={files[current]}
        setCode={(value) =>
          setFiles({
            ...files,
            [current]: value,
          })
        }
      />

      <iframe
        title="preview"
        srcDoc={preview}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />

      <div style={{ gridColumn: "2 / 4" }}>
        <Terminal />
      </div>
    </div>
  );
}

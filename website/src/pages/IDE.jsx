import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Terminal from "../components/Terminal";

export default function IDE() {
  const [current, setCurrent] = useState("index.html");

  const [files, setFiles] = useState({
    "index.html": "<h1>Hello Sandbox CodeX</h1>",
    "style.css": "body{background:#111;color:#fff;font-family:Arial}",
    "script.js": "console.log('Hello');",
  });

  const createFile = () => {
    const name = prompt("File name");
    if (!name || files[name]) return;

    setFiles({
      ...files,
      [name]: "",
    });

    setCurrent(name);
  };

  const preview = `
<!DOCTYPE html>
<html>
<head>
<style>${files["style.css"] || ""}</style>
</head>
<body>
${files["index.html"] || ""}
<script>
${files["script.js"] || ""}
</script>
</body>
</html>`;

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"220px 1fr 1fr",
      gridTemplateRows:"1fr 220px",
      height:"100vh"
    }}>
      <Sidebar
        files={files}
        current={current}
        setCurrent={setCurrent}
        createFile={createFile}
      />

      <Editor
        language={
          current.endsWith(".css")
            ? "css"
            : current.endsWith(".js")
            ? "javascript"
            : "html"
        }
        code={files[current]}
        setCode={(value)=>setFiles({...files,[current]:value})}
      />

      <iframe
        title="preview"
        srcDoc={preview}
        style={{border:"none",width:"100%",height:"100%"}}
      />

      <div style={{gridColumn:"2 / 4"}}>
        <Terminal/>
      </div>
    </div>
  );
}

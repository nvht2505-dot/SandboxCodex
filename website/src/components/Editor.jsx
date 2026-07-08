import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      theme="vs-dark"
      defaultValue={'console.log("Sandbox CodeX");'}
    />
  );
}

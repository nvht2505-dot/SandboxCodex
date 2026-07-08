const files = [
  "src",
  "public",
  "package.json",
  "vite.config.js",
  "README.md",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Explorer</h3>

      {files.map((file) => (
        <div className="file" key={file}>
          📄 {file}
        </div>
      ))}
    </aside>
  );
}

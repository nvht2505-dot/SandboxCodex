const files = [
  "index.html",
  "style.css",
  "script.js",
  "package.json",
  "README.md",
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "#111827",
        color: "#fff",
        padding: "12px",
        borderRight: "1px solid #222",
        overflowY: "auto",
      }}
    >
      <h3
        style={{
          marginBottom: "12px",
          fontSize: "14px",
          color: "#9ca3af",
        }}
      >
        EXPLORER
      </h3>

      {files.map((file) => (
        <div
          key={file}
          style={{
            padding: "8px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#1f2937")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          📄 {file}
        </div>
      ))}
    </aside>
  );
}

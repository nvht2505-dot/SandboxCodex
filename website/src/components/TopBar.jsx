export default function TopBar() {
  return (
    <header className="topbar">
      <div className="logo">Sandbox CodeX</div>

      <div className="actions">
        <button>▶ Run</button>
        <button>■ Stop</button>
        <button>🚀 Deploy</button>
      </div>
    </header>
  );
}

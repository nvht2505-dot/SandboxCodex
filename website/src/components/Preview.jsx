export default function Preview() {
  return (
    <div className="preview">
      <h3>Live Preview</h3>

      <iframe
        title="preview"
        src="about:blank"
        style={{
          width: "100%",
          height: "300px",
          border: "none",
          background: "#fff"
        }}
      />
    </div>
  );
}

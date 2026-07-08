export default function Sidebar({
  files,
  current,
  setCurrent,
  createFile,
}) {
  return (
    <aside
      style={{
        width:220,
        background:"#111827",
        color:"#fff",
        padding:10,
        borderRight:"1px solid #222"
      }}
    >
      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:10
        }}
      >
        <b>EXPLORER</b>

        <button
          onClick={createFile}
          style={{
            cursor:"pointer",
            padding:"4px 8px"
          }}
        >
          +
        </button>
      </div>

      {Object.keys(files).map((name)=>(
        <div
          key={name}
          onClick={()=>setCurrent(name)}
          style={{
            padding:"8px",
            cursor:"pointer",
            borderRadius:6,
            background:
              current===name
                ? "#374151"
                : "transparent"
          }}
        >
          📄 {name}
        </div>
      ))}
    </aside>
  );
}

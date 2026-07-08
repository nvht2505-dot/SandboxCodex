import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import CodeEditor from "../components/Editor";
import AIChat from "../components/AIChat";
import Terminal from "../components/Terminal";
import Preview from "../components/Preview";

export default function IDE() {
  return (
    <>
      <TopBar />

      <div className="workspace">
        <Sidebar />

        <div className="editor-area">
          <CodeEditor />
        </div>

        <AIChat />
      </div>

      <Terminal />

      <Preview />
    </>
  );
}

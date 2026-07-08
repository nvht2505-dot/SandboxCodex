# Sandbox CodeX

> Next Generation AI Sandbox IDE

Sandbox CodeX là một AI Sandbox IDE thế hệ mới giúp lập trình viên xây dựng, chạy thử và triển khai ứng dụng ngay trên trình duyệt trong môi trường cô lập (Sandbox).

## Mục tiêu

- AI Agent
- Secure Sandbox
- Multi AI Models
- Browser IDE
- Docker Workspace
- Live Preview
- Terminal
- Git Integration
- API Integration

## Hỗ trợ AI

- OpenAI
- Claude
- Gemini
- Grok
- DeepSeek
- Qwen
- Mistral
- Llama

## Chức năng

- Code Editor
- AI Assistant
- AI Agent
- Browser Preview
- Linux Terminal
- Docker Sandbox
- File Manager
- Git
- Extension System
- Plugin Marketplace

## Trạng thái

🚧 Đang phát triển

Version 0.1.0 Alpha

## Mục tiêu cuối cùng

Repository này sẽ là nền tảng để phát triển Sandbox CodeX từ phiên bản Alpha đến v1.0, bao gồm:

- Landing Page hiện đại
- AI Agent
- IDE trên trình duyệt
- Sandbox Runtime
- Docker Container
- Terminal
- File Manager
- GitHub Integration
- Plugin System
- Marketplace
- Tài liệu đầy đủ
- Triển khai lên môi trường production

## Lộ trình phát triển

1. **Giai đoạn 1:** Hoàn thiện tài liệu và landing page.
2. **Giai đoạn 2:** Xây dựng giao diện IDE.
3. **Giai đoạn 3:** Thêm AI Agent và Sandbox.
4. **Giai đoạn 4:** Hoàn thiện backend, xác thực và triển khai bản phát hành đầu tiên (v1.0.0).

Được. Theo dự án Sandbox CodeX, tao đề xuất làm theo thứ tự này để sau này không phải sửa đi sửa lại:
Giai đoạn 1: Landing Page
✅ Trang chủ đẹp như Cursor/Bolt/Lovable
✅ Responsive điện thoại
✅ Dark mode
✅ Animation
✅ Header + Hero + Features + Footer
Giai đoạn 2: IDE
📁 File Explorer
📝 Monaco Editor (VS Code)
📄 Tabs nhiều file
🔍 Tìm kiếm file
Giai đoạn 3: Terminal
💻 Xterm.js
🐧 Terminal Linux
📦 Chạy npm, git, python...
🔄 Realtime
Giai đoạn 4: AI
🤖 Chat AI
🧠 Hỗ trợ OpenAI, Gemini, Claude, Grok, DeepSeek...
✍️ Sinh code
🔧 Sửa lỗi code
Giai đoạn 5: Sandbox
🐳 Docker Container
▶️ Chạy Node.js, Python, PHP...
🌐 Live Preview
📦 Cài package
Giai đoạn 6: Cloud
🔐 Đăng nhập GitHub
📂 Clone repository
🚀 Deploy lên Vercel
☁️ Đồng bộ dự án

Giai đoạn tiếp theo
Xây dựng Sandbox CodeX thành một IDE trên trình duyệt theo các mốc sau:
Phase 1
📁 File Explorer
📝 Monaco Editor
💻 Xterm Terminal
📂 Tab Editor
🌙 Dark Theme
Phase 2
🤖 AI Chat Sidebar
📄 Quản lý project
💾 Lưu workspace
Phase 3
🐳 Docker Sandbox
▶️ Run/Stop project
🌐 Live Preview
📦 Git Integration
Phase 4
🔌 Plugin Marketplace
👥 Collaboration
☁️ Cloud Workspace
🚀 Deploy một chạm lên Vercel

Tiếp theo nên xây dựng giao diện IDE trước, sau đó mới thêm AI và Docker. Cấu trúc sẽ như sau:

Sandbox CodeX
├── TopBar
│   ├── Logo
│   ├── Project
│   ├── Run
│   ├── Stop
│   └── Deploy
├── Sidebar
│   ├── Explorer
│   ├── Search
│   ├── Source Control
│   ├── Extensions
│   └── Settings
├── Editor
│   ├── Monaco Editor
│   ├── Tabs
│   └── Breadcrumb
├── AI Panel
│   ├── Chat
│   ├── Prompt
│   └── History
├── Terminal
│   └── Xterm
└── Preview
    └── Live Browser

Cấu trúc thư mục React

src/
 ├── components/
 │   ├── TopBar.jsx
 │   ├── Sidebar.jsx
 │   ├── Explorer.jsx
 │   ├── Editor.jsx
 │   ├── Terminal.jsx
 │   ├── Preview.jsx
 │   └── AIChat.jsx
 ├── pages/
 │   └── IDE.jsx
 ├── App.jsx
 ├── App.css
 └── main.jsx

Giai đoạn đầu

✅ Sidebar giống VS Code

✅ Monaco Editor ở giữa

✅ Xterm Terminal phía dưới

✅ AI Chat bên phải

✅ Responsive cho điện thoại


Sau khi hoàn thành, giao diện sẽ trông gần như:

┌───────────────────────────────────────────────────────────────┐
│ Sandbox CodeX              ▶ Run    ■ Stop     🚀 Deploy      │
├──────────────┬─────────────────────────────┬──────────────────┤
│ Explorer     │                             │                  │
│ src          │                             │    AI Chat       │
│ public       │     Monaco Editor           │                  │
│ package.json │                             │                  │
│              │                             │                  │
├──────────────┴─────────────────────────────┴──────────────────┤
│ Terminal                                                     │
├───────────────────────────────────────────────────────────────┤
│ Live Preview                                                 │
└───────────────────────────────────────────────────────────────┘

Sau bước này mới tích hợp:

🤖 AI Agent

🐳 Docker/WebContainer

📦 Git

🚀 Deploy trực tiếp lên Vercel

🌐 Preview thời gian thực


Đây sẽ là nền tảng của phiên bản Sandbox CodeX v0.2.

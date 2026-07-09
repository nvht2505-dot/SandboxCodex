'use strict'

const WORKFLOW_EVENTS = Object.freeze([
  'workflow.started',
  'process.log',
  'process.crashed',
  'healthcheck.failed',
  'test.failed',
  'patch.applied',
  'workflow.ready',
  'deployment.published',
])

const DEFAULT_AGENT_ROLES = Object.freeze({
  planner: 'Phân tích intent, acceptance criteria và chia nhỏ task.',
  architect: 'Chọn stack, schema, API contract và security model.',
  coder: 'Sinh hoặc sửa code bằng patch nhỏ trong workspace.',
  runner: 'Cài dependencies, chạy workflow, test và build trong sandbox.',
  debugger: 'Đọc log realtime, phân loại lỗi, tạo patch và rerun.',
  release: 'Chuẩn bị build artifact, HTTPS, domain mapping và rollback notes.',
})

const DEFAULT_TOOL_POLICY = Object.freeze({
  allowedTools: [
    'read_file',
    'write_file',
    'apply_patch',
    'list_files',
    'run_command',
    'install_dependencies',
    'start_workflow',
    'stop_workflow',
    'read_logs',
    'get_preview_url',
    'create_database',
    'run_migration',
    'seed_database',
    'set_secret',
    'get_secret_ref',
    'deploy_project',
    'map_domain',
    'rollback_deployment',
  ],
  blockedCommandPatterns: [
    'rm -rf /',
    ':(){ :|:& };:',
    'mkfs',
    'dd if=',
    'curl http://169.254.169.254',
  ],
  defaultTimeoutMs: 120000,
  maxSelfHealingAttempts: 5,
})

function buildOpenClawSystemPrompt() {
  return [
    'Bạn là OpenClaw, AI software factory agent của Eios.',
    'Nhiệm vụ: biến intent của user thành ứng dụng production-ready trong sandbox.',
    'Luôn làm theo vòng lặp: clarify only if blocked → plan → generate → run → observe → patch → verify → deploy.',
    'Chỉ thao tác qua tools được cấp. Không tiết lộ secret.',
    'Luôn tạo patch nhỏ, kiểm thử sau mỗi thay đổi, và báo trạng thái bằng event có cấu trúc.',
  ].join('\n')
}

function createOpenClawPlan(userRequest, options = {}) {
  const request = normalizeText(userRequest)

  if (!request) {
    throw new Error('createOpenClawPlan requires a non-empty user request')
  }

  const stack = options.stack?.length ? options.stack : inferStack(request)

  return {
    intent: request,
    architecture: 'Browser IDE → OpenClaw Orchestrator → OpenAI agent layer → Tool Gateway → Sandbox Runtime → Deployment',
    stack,
    tasks: [
      {
        id: 'T1',
        title: 'Plan architecture and acceptance criteria',
        acceptance: ['Intent is summarized', 'Stack and risks are documented'],
      },
      {
        id: 'T2',
        title: 'Generate project code and infrastructure contracts',
        acceptance: ['Frontend, backend, API routes, schema and auth boundaries are created'],
      },
      {
        id: 'T3',
        title: 'Run workflow and self-heal failures',
        acceptance: ['Frontend, backend and worker run in parallel', 'Crashes produce patches and reruns'],
      },
      {
        id: 'T4',
        title: 'Build and publish deployment artifact',
        acceptance: ['HTTPS live URL is produced', 'Rollback metadata is stored'],
      },
    ],
    risks: [
      'Secrets must stay backend-only and be passed to tools by reference.',
      'Dangerous shell commands must be blocked by Tool Gateway policy.',
      'Self-healing loops need a strict retry limit to avoid runaway cost.',
    ],
    next_action: 'generate',
  }
}

function createToolCallPolicy(overrides = {}) {
  return {
    ...DEFAULT_TOOL_POLICY,
    ...overrides,
    allowedTools: overrides.allowedTools || [...DEFAULT_TOOL_POLICY.allowedTools],
    blockedCommandPatterns: overrides.blockedCommandPatterns || [...DEFAULT_TOOL_POLICY.blockedCommandPatterns],
  }
}

function isCommandAllowed(command, policy = DEFAULT_TOOL_POLICY) {
  const normalizedCommand = normalizeText(command).toLowerCase()

  if (!normalizedCommand) {
    return false
  }

  return !policy.blockedCommandPatterns.some((pattern) => normalizedCommand.includes(pattern.toLowerCase()))
}

function validateWorkflowEvent(event) {
  if (!event || typeof event !== 'object') {
    return { valid: false, reason: 'event must be an object' }
  }

  if (!WORKFLOW_EVENTS.includes(event.type)) {
    return { valid: false, reason: `unsupported event type: ${event.type}` }
  }

  if (!event.run_id || !event.workspace_id) {
    return { valid: false, reason: 'event requires run_id and workspace_id' }
  }

  return { valid: true }
}

function redactSecrets(value) {
  if (typeof value !== 'string') {
    return value
  }

  return value
    .replace(/sk-[A-Za-z0-9_-]{12,}/g, '[REDACTED_OPENAI_KEY]')
    .replace(/(api[_-]?key|token|secret)=([^\s]+)/gi, '$1=[REDACTED]')
}

function inferStack(request) {
  const lower = request.toLowerCase()

  if (lower.includes('next')) {
    return ['Next.js', 'OpenAI Responses API', 'PostgreSQL', 'Docker']
  }

  if (lower.includes('python') || lower.includes('fastapi')) {
    return ['React', 'FastAPI', 'OpenAI Agents SDK', 'PostgreSQL', 'Docker']
  }

  return ['React', 'Node.js', 'OpenAI Responses API', 'PostgreSQL', 'Docker']
}

function normalizeText(value) {
  return String(value || '').trim().replace(/\s+/g, ' ')
}

module.exports = {
  DEFAULT_AGENT_ROLES,
  DEFAULT_TOOL_POLICY,
  WORKFLOW_EVENTS,
  buildOpenClawSystemPrompt,
  createOpenClawPlan,
  createToolCallPolicy,
  isCommandAllowed,
  redactSecrets,
  validateWorkflowEvent,
}

'use strict'

const assert = require('node:assert/strict')
const {
  WORKFLOW_EVENTS,
  buildOpenClawSystemPrompt,
  createOpenClawPlan,
  createToolCallPolicy,
  isCommandAllowed,
  redactSecrets,
  validateWorkflowEvent,
} = require('../src/openclaw')

const plan = createOpenClawPlan('Tạo app quản lý task bằng Next.js có auth và database')
assert.equal(plan.next_action, 'generate')
assert.ok(plan.stack.includes('Next.js'))
assert.equal(plan.tasks.length, 4)
assert.match(plan.architecture, /Tool Gateway/)

assert.throws(() => createOpenClawPlan(''), /non-empty user request/)

const policy = createToolCallPolicy()
assert.equal(isCommandAllowed('npm run build', policy), true)
assert.equal(isCommandAllowed('rm -rf /', policy), false)
assert.ok(policy.allowedTools.includes('deploy_project'))

assert.equal(WORKFLOW_EVENTS.includes('process.crashed'), true)
assert.deepEqual(
  validateWorkflowEvent({ type: 'workflow.ready', run_id: 'run_1', workspace_id: 'ws_1' }),
  { valid: true },
)
assert.equal(validateWorkflowEvent({ type: 'unknown', run_id: 'run_1', workspace_id: 'ws_1' }).valid, false)

assert.match(buildOpenClawSystemPrompt(), /OpenClaw/)
assert.equal(redactSecrets('OPENAI_API_KEY=sk-abcdefghijklmnopqrstuvwxyz'), 'OPENAI_API_KEY=[REDACTED]')
assert.equal(redactSecrets('token=abc123'), 'token=[REDACTED]')

console.log('openclaw tests passed')

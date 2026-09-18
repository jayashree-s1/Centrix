const urls = [
  'https://api.agents.snsihub.ai/webhook-test/84ce739a-0790-4390-9396-134a0b1ac962',
  'https://api.agents.snsihub.ai/webhook/84ce739a-0790-4390-9396-134a0b1ac962',
  'https://api.agents.snsihub.ai/webhook-test/bb3b5140-a553-4305-a592-6cfff6719bd3',
  'https://api.agents.snsihub.ai/webhook/bb3b5140-a553-4305-a592-6cfff6719bd3',
]

for (const url of urls) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'test' }),
      signal: AbortSignal.timeout(5000),
    })
    console.log(url, '-> HTTP', res.status)
  } catch (e) {
    console.log(url, '-> ERROR', e.message)
  }
}

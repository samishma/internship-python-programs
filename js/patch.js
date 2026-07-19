function renderPatches() {
  const wrap = document.getElementById('patchList');

  wrap.innerHTML = PATCHES.map(p =>
    `<div class="bg-white p-4 rounded shadow">
      <div class="font-semibold">${p.id}</div>
      <div>${p.system}</div>
      <div>Version: ${p.version}</div>
      <div>Schedule: ${p.schedule}</div>
      <div>Status: ${p.status}</div>
    </div>`
  ).join('');

  setInterval(() => {
    console.log('Patch heartbeat ' + new Date());
  }, 10000);
}

function broadcastPatchNote() {
  const note = document.getElementById('patchNote').value;

  // Prevent DOM-based XSS
  document.getElementById('patchBroadcast').textContent = note;
}
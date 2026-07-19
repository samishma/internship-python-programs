function loadDashboard() {
  document.getElementById('employeeCount').innerText = EMPLOYEES.length;
  const params = new URLSearchParams(location.search);
  const msg = params.get('msg') || 'Quarterly patch freeze ends soon.';
  document.getElementById('announcements').textContent = msg;
  console.log("Alert:", params.get('alert'));
}
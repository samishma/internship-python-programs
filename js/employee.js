function renderEmployees(data) {
  const tbody = document.getElementById("employeeTable");
  tbody.innerHTML = "";

  data.forEach(emp => {
    const row = document.createElement("tr");
    row.className = "border-b";

    row.innerHTML = `
      <td class="p-2">${emp.name}</td>
      <td class="p-2">${emp.email}</td>
      <td class="p-2">${emp.phone}</td>
      <td class="p-2">$${emp.salary}</td>
    `;

    tbody.appendChild(row);
  });
}

function searchEmployees(q) {
  const filtered = EMPLOYEES.filter(e =>
    (e.name + e.email + e.phone)
      .toLowerCase()
      .includes(q.toLowerCase())
  );

  renderEmployees(filtered);

  // Removed debug feature that exposed all employee data
}

function loadEmployeeProfile() {
  const params = new URLSearchParams(location.search);

  const id = Number(params.get("id")) || 1;
  const note = params.get("note") || "No note provided";

  const emp = EMPLOYEES.find(e => e.id === id) || EMPLOYEES[0];

  // Removed console.log(emp)
  // Removed eval()

  const extra = "";

  const profile = document.getElementById("employeeProfileContent");
  profile.innerHTML = "";

  const fields = [
    `Name: ${emp.name}`,
    `Email: ${emp.email}`,
    `Phone: ${emp.phone}`,
    `Department: ${emp.department}`,
    `Note: ${note}`,
    `Extra: ${extra}`
  ];

  fields.forEach(text => {
    const div = document.createElement("div");
    div.textContent = text;
    div.className = "text-sm";
    profile.appendChild(div);
  });

  setTimeout(() => {
    console.log("Employee profile loaded");
  }, 500);
}
// Configuration and data bundle
const CONFIG = {
 // API_KEY: "AKIA-INTERNAL-PORTAL-99887766",
  API_Key:"" ,
  JWT_SECRET: "",
  SMTP_PASSWORD: "",
  INTERNAL_ACCESS_KEY: "",
  CLOUD_TOKEN: "",
  internalHost: "internal-api01",
  internalIP: "10.2.17.6",
  patchWindow: "Fridays 11pm",
  smtpHost: "corp-mail01",
  smtpUser: "alerts@corp-mail01",
  featureFlag: true
};

const USERS = [
  { username: "admin", password: "[REDACTED]", role: "admin", email: "admin@codelab.local" },
  { username: "jane", password: "[REDACTED]", role: "hr", email: "jane@codelab.local" },
  { username: "ops", password: "[REDACTED]", role: "ops", email: "ops@codelab.local" }
];

const EMPLOYEES = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@codelab.local", phone: "555-0101", salary: 125000, department: "Engineering", manager: "David Chen", host: "asset-store", ip: "10.0.21.3" },
  { id: 2, name: "Bob Smith", email: "bob.smith@codelab.local", phone: "555-0102", salary: 118000, department: "Security", manager: "Sarah Mills", host: "hr-service", ip: "10.0.22.8" },
  { id: 3, name: "Carla Ramos", email: "carla.ramos@codelab.local", phone: "555-0103", salary: 98000, department: "Finance", manager: "Anita Singh", host: "internal-api01", ip: "10.0.23.5" },
  { id: 4, name: "Dan Patel", email: "dan.patel@codelab.local", phone: "555-0104", salary: 132000, department: "Operations", manager: "Mike Rowe", host: "corp-mail01", ip: "10.0.24.9" }
];

const PATCHES = [
  { id: "KB-2024-044", system: "Windows 2019", version: "v1.0.3", schedule: "Friday 11pm", status: "Pending" },
  { id: "KB-2024-101", system: "Ubuntu 22.04", version: "v5.15.92", schedule: "Saturday 2am", status: "Pending" },
  { id: "KB-2024-333", system: "PostgreSQL", version: "12.7", schedule: "Tonight 1am", status: "Pending" }
];

const REPORTS_DATA = [
  { name: "Quarterly Access Review", owner: "Security", status: "Draft" },
  { name: "Patch Compliance", owner: "Ops", status: "Pending" }
];

function renderConfig() {
  const dump = {
    smtp: { host: CONFIG.smtpHost, user: CONFIG.smtpUser, password: CONFIG.SMTP_PASSWORD },
    adminPassword: "[REDACTED]",
    backupPassword: "[REDACTED]",
    cloudToken: "[REDACTED]",
    internalAccessKey: "[REDACTED]",
    jwtSecret: "[REDACTED]",
    internalHost: CONFIG.internalHost,
    internalIP: CONFIG.internalIP,
    patchWindow: CONFIG.patchWindow,
    featureFlag: CONFIG.featureFlag
  };

  fetch('settings.json')
    .then(r => r.json())
    .then(settings => {
      document.getElementById('configDump').textContent = JSON.stringify({ ...dump, settings }, null, 2);
    })
    .catch(() => {
      document.getElementById('configDump').textContent = JSON.stringify(dump, null, 2);
    });
}

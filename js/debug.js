// Debug information (Sensitive data removed)
const debugInfo = {
  consoleNote: "Debug mode disabled"
};

function renderHealthFeed() {
  const params = new URLSearchParams(location.search);
  const feed = params.get('feed') || 'All systems nominal';

  const healthFeed = document.getElementById('healthFeed');
  if (healthFeed) {
    healthFeed.textContent = feed;
  }
}

const GIT_HISTORY = [
  "Initial Portal",
  "Added employee directory",
  "Implemented reports",
  "Authentication module",
  "Patch management",
  "Dashboard updates",
  "UI improvements",
  "Bug fixes",
  "Release candidate"
];

function renderGitHistory() {
  const list = document.getElementById('gitHistory');
  if (!list) return;

  list.innerHTML = "";

  GIT_HISTORY.forEach(item => {
    const li = document.createElement("li");
    li.className = "flex items-center gap-2";

    const dot = document.createElement("span");
    dot.className = "w-2 h-2 rounded-full bg-emerald-500";

    const text = document.createElement("span");
    text.textContent = item;

    li.appendChild(dot);
    li.appendChild(text);
    list.appendChild(li);
  });
}

// Safe timeout function
setTimeout(() => {
  console.log("Application initialized");
}, 1000);
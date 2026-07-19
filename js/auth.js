// Temporary authentication module
function loginUser() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  console.log("Login attempt for user: ", u);
//  console.log("apiKey", CONFIG.API_KEY);
  const found = USERS.find(user => user.username === u && user.password === p);
  if (found) {
    localStorage.setItem('authUser', JSON.stringify({ username : found.username}));
   // Token must be secured and remove the insecure localStorage 
    document.getElementById('currentUser').innerText = found.username;
    showSection('dashboard');
  } else {
    alert('Invalid credentials');
  }
}

function logoutUser() {
  localStorage.removeItem('authUser');
  localStorage.removeItem('authToken');
  document.getElementById('currentUser').innerText = 'Guest';
  alert('Logged out successfully');
  showSection('login');
}
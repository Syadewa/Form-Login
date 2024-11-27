function login() {
  const username = document.getElementById('username').value;
  if (username) {
    // Redirect ke halaman welcome
    window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
  } else {
    alert('Please enter your username!');
  }
}

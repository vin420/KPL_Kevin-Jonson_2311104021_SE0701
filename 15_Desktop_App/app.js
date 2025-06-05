function hashPassword(password) {
  return btoa(password); // NOT secure, hanya base64 (untuk demo)
}

function validate(username, password) {
  const asciiOnly = /^[A-Za-z]+$/;
  const specialChar = /[!@#$%^&*]/;
  const digit = /\d/;
  const errors = [];

  if (!asciiOnly.test(username)) errors.push("Username hanya huruf A-Z");
  if (username.length < 4 || username.length > 20) errors.push("Username harus 4-20 karakter");
  if (password.length < 8 || password.length > 20) errors.push("Password harus 8-20 karakter");
  if (!specialChar.test(password)) errors.push("Password perlu karakter unik (!@#$%^&*)");
  if (!digit.test(password)) errors.push("Password harus mengandung angka");
  if (password.toLowerCase().includes(username.toLowerCase())) errors.push("Password tidak boleh mengandung username");

  return errors;
}

function register() {
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const errors = validate(username, password);
  if (errors.length > 0) return showStatus(errors.join("\n"));

  if (users.find(u => u.username === username)) {
    return showStatus("Username sudah digunakan");
  }

  users.push({ username, password: hashPassword(password) });
  localStorage.setItem("users", JSON.stringify(users));
  showStatus("Registrasi berhasil!", "green");
}

function login() {
  const username = document.getElementById("log-username").value.trim();
  const password = document.getElementById("log-password").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find(u => u.username === username);
  if (!user) return showStatus("Username tidak ditemukan");
  if (user.password !== hashPassword(password)) return showStatus("Password salah");

  showStatus("Login berhasil!", "green");
}

function showStatus(message, color = "red") {
  const status = document.getElementById("status");
  status.innerText = message;
  status.style.color = color;
}


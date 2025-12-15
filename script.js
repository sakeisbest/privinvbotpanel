function addStock() {
  const type = document.getElementById("type").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const key = document.getElementById("key").value;

  if (!email || !password || !key) {
    show("❌ Popuni sva polja", "red");
    return;
  }

  // OVO JE SAMO FRONTEND DEMO
  // Pravi add stock ide PREKO BOTA
  show("✅ Poslano botu (simulacija)", "green");
}

function show(text, color) {
  const msg = document.getElementById("msg");
  msg.style.color = color;
  msg.innerText = text;
}

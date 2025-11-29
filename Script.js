document.querySelector(".btn-whatsapp").addEventListener("click", () => {
  window.open("https://wa.me/60105334", "_blank");
});

document.querySelector(".btn-cotizar").addEventListener("click", () => {
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
});
function enviarWhatsApp() {
  let nombre = document.getElementById("nombre").value.trim();
  let ubicacion = document.getElementById("ubicacion").value.trim();
  let detalle = document.getElementById("detalle").value.trim();

  if (!nombre || !ubicacion || !detalle) {
    alert("Por favor llená todos los campos");
    return;
  }

  let mensaje =
    `Hola, necesito una cotización.\n\n` +
    `👤 *Nombre:* ${nombre}\n` +
    `📍 *Ubicación:* ${ubicacion}\n` +
    `⚡ *Servicio:* ${detalle}\n\n` +
    `Quedo atento, gracias.`;

  let url = `https://wa.me/50660105334?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}
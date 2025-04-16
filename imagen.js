console.log("Proyecto cargado correctamente - Conexión a Internet");
function ampliarImagen(imagen) {
  const modal = document.getElementById("modal");
  const imagenGrande = document.getElementById("imagenGrande");
  imagenGrande.src = imagen.src;
  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

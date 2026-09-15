function copiarTextoClasico() {
  // Crear un elemento temporal oculto
  const input = document.createElement("input");
  input.value = "lesrrydavidriosfernandes@gmail.com";
  document.body.appendChild(input);
  
  // Seleccionar y copiar
  input.select();
  document.execCommand("copy");
  
  // Limpiar
  document.body.removeChild(input);
  alert("Texto copiado");
}
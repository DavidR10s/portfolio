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
  Swal.fire({
    icon: 'success',
    title: '¡Correo copiado al portapapeles!',
    text: 'Ahora puedes pegarlo en tu cliente de correo para enviarme un mensaje.',
    confirmButtonText: 'Cerrar',
    customClass: {
      confirmButton: 'bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-400 transition text-sm'
    }
  });
}
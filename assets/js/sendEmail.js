  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact__form');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '¡Mensaje enviado con éxito!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#28a745', 
            color: '#fff'
          });
          form.reset();
        } else {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Error al enviar el mensaje',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#c0392b',
            color: '#fff'
          });
        }
      } catch (error) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'warning',
          title: 'Error de conexión',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: '#f39c12', 
          color: '#000'
        });
      }
    });
  });
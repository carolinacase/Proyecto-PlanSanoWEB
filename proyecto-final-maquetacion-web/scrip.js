document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Ocultar el header y agregar fondo en navbar al hacer scroll
            header.style.transform = 'translateY(-100%)';
            navbar.classList.add('scrolled'); // Agrega la clase scrolled
        } else {
            // Mostrar el header y eliminar fondo en navbar al hacer scroll hacia arriba
            header.style.transform = 'translateY(0)';
            navbar.classList.remove('scrolled'); // Elimina la clase scrolled
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
const texto = document.getElementById("escritura").innerText;  // Obtiene el texto del h3
const h3 = document.getElementById("escritura");
h3.innerText = "";  // Borra el contenido del h3 inicialmente

let i = 0;
const velocidad = 100;  // Tiempo en milisegundos entre cada letra

// Función para agregar una letra cada vez
const escribir = () => {
  if (i < texto.length) {
    h3.innerText += texto.charAt(i);  // Agrega una letra al h3
    i++;
  } else {
    clearInterval(intervalo);  // Detiene el intervalo cuando se muestra todo el texto
  }
};

const intervalo = setInterval(escribir, velocidad);  // Llama a la función 'escribir' cada 'velocidad' milisegundos

// Crear el botón "Volver arriba"
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = "Volver arriba";
    scrollButton.classList.add('scroll-up-btn');
    document.body.appendChild(scrollButton);
    
    // Mostrar el botón cuando se hace scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block'; // Mostrar botón
        } else {
            scrollButton.style.display = 'none'; // Ocultar botón
        }
    });

    // Funcionalidad de volver arriba al hacer clic
    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// Mostrar mensaje de confirmación al enviar el formulario
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario de manera tradicional
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('¡Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');
        // Aquí puedes agregar la lógica para enviar los datos del formulario, si es necesario.
    }
});
// Espera a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario
    const contactForm = document.querySelector('.contact-form');
    
    // Intercepta el evento de envío del formulario
    contactForm.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe y la página se recargue
        event.preventDefault();

        // Muestra el mensaje de confirmación en pantalla
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
        confirmationMessage.classList.add('confirmation-message');

        // Inserta el mensaje en el DOM, después del formulario
        contactForm.appendChild(confirmationMessage);
    });
});

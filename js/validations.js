window.onload = function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Restablecer los estilos y mensajes de error
            resetStylesAndErrorMessages();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            let hasErrors = false;

            // Validar el nombre
            if (!nameInput.value) {
                displayErrorMessage('nameError', 'Por favor, ingresa tu nombre.');
                hasErrors = true;
                markInputAsInvalid(nameInput);
            } else if (!isValidName(nameInput.value)) {
                displayErrorMessage('nameError', 'El nombre solo puede contener letras.');
                hasErrors = true;
                markInputAsInvalid(nameInput);
            }

            // Validar el correo electrónico
            if (!emailInput.value) {
                displayErrorMessage('emailError', 'Por favor, ingresa tu correo electrónico.');
                hasErrors = true;
                markInputAsInvalid(emailInput);
            } else if (!isValidEmail(emailInput.value)) {
                displayErrorMessage('emailError', 'Ingresa un correo electrónico válido.');
                hasErrors = true;
                markInputAsInvalid(emailInput);
            }

            // Validar el mensaje
            if (!messageInput.value) {
                displayErrorMessage('messageError', 'Por favor, ingresa tu mensaje.');
                hasErrors = true;
                markInputAsInvalid(messageInput);
            } else if (messageInput.value.length < 10 || messageInput.value.length > 500) {
                displayErrorMessage('messageError', 'El mensaje debe tener entre 10 y 500 caracteres.');
                hasErrors = true;
                markInputAsInvalid(messageInput);
            }

            // Si hay errores, detener el envío del formulario
            if (hasErrors) {
                return;
            }

            // Si pasa las validaciones, llamar a la función para enviar correo
            sendEmail(nameInput.value, emailInput.value, messageInput.value);
        });
    }
};

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidName(name) {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
}

function resetStylesAndErrorMessages() {
    const errorElements = document.querySelectorAll('.error');
    const inputElements = document.querySelectorAll('.form-control');

    errorElements.forEach(function(element) {
        element.textContent = '';
    });

    inputElements.forEach(function(element) {
        element.classList.remove('invalid-input');
    });
}

function displayErrorMessage(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
}

function markInputAsInvalid(inputElement) {
    inputElement.classList.add('invalid-input');
}

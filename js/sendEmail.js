(function() {
    // Inicializar EmailJS con tu clave pública
    emailjs.init('5p6Jh2ZDDTkLyEgO6');
})();

function sendEmail(userName, userEmail, userMessage) {
    // Crear el objeto de datos para enviar con EmailJS
    const data = {
        userName: userName,
        userEmail: userEmail,
        userMessage: userMessage
    };

    // Enviar el formulario usando EmailJS y pasar los datos
    emailjs.send('service_grje8z4', 'template_dj7ca4j', data)
        .then(function(response) {
            console.log('SUCCESS!', response);
        }, function(error) {
            console.log('FAILED...', error);
        });
}


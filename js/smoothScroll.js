window.onload = function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                scrollToElement(targetElement);
            }
        });
    });
};

function scrollToElement(element) {
    const offset = element.offsetTop;
    const duration = 1000; // Duración en milisegundos

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

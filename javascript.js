const slides = document.querySelector('.slides');
        let index = 0;

        function showSlide() {
            const totalSlides = 3; // Nombre total de slides
            index = (index + 1) % totalSlides;
            const offset = -index * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        setInterval(showSlide, 3000); // Changer d'image toutes les 3 secondes
        function toggleSubList(id) {
            const subList = document.getElementById(id);
            // Vérifie si la sous-liste est actuellement affichée
            if (subList.style.display === "block") {
                subList.style.display = "none"; // Masquer
            } else {
                subList.style.display = "block"; // Afficher
            }
        }
       /* document.addEventListener('DOMContentLoaded', () => {


const textContainer = document.createElement('div');
textContainer.className = 'animated-text';
document.body.appendChild(textContainer);

const phrases = ["Nous vous offrons des services de qualite"];
let phraseIndex = 0;
let charIndex = 0;

function typePhrase() {
    if (phraseIndex < phrases.length) {
        const currentPhrase = phrases[phraseIndex];
        if (charIndex < currentPhrase.length) {
            textContainer.textContent += currentPhrase[charIndex];
            charIndex++;
            setTimeout(typePhrase, 30); // Adjust typing speed here
        } else {
            textContainer.textContent += '\n';
            charIndex = 0;
            phraseIndex++;
            setTimeout(typePhrase, 1); // Delay before next phrase
        }
    }
}

typePhrase(); // Start typing animation


});*/
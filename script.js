// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Toggle 'More Details' section
document.querySelectorAll('.more-details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.closest('.experience-card').querySelector('.more-details');
        details.style.display = details.style.display === 'none' || !details.style.display ? 'block' : 'none';
    });
});

// Show the certificate section when "Show Certificate" is clicked
document.querySelectorAll('.show-certificate-btn').forEach(button => {
    button.addEventListener('click', function() {
        const certificateSection = this.closest('.experience-card').querySelector('.certificate-section');
        certificateSection.style.display = 'block';
    });
});

// Hide the certificate section when "Back" button is clicked
document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function() {
        const certificateSection = this.closest('.certificate-section');
        certificateSection.style.display = 'none';
    });
});
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
// Open modal for details
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.project-slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 20; // Including margin

    const maxSlide = cards.length - 4; // Show only 4 cards at a time

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    slider.style.transform = `translateX(${-currentSlide * cardWidth}px)`;
}
document.addEventListener('DOMContentLoaded', () => {
    const projectSliders = document.querySelectorAll('.project-slider');

    projectSliders.forEach((slider) => {
        const prevButton = slider.closest('.slider-container').querySelector('.prev');
        const nextButton = slider.closest('.slider-container').querySelector('.next');
        
        let scrollAmount = 0;

        prevButton.addEventListener('click', () => {
            scrollAmount -= slider.clientWidth / 4; // Scroll by 1 card width
            if (scrollAmount < 0) scrollAmount = 0;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        });

        nextButton.addEventListener('click', () => {
            scrollAmount += slider.clientWidth / 4; // Scroll by 1 card width
            if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
                scrollAmount = slider.scrollWidth - slider.clientWidth;
            }
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        });
    });
});

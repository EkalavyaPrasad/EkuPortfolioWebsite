function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
}



// Select the scroll container and the next button
const scrollContainer = document.querySelector('.projects-scroll-container');
const nextButton = document.getElementById('next-button');

// Define the scroll step (how much to scroll each time the button is clicked)
const scrollStep = 200; // Adjust this value to control the scroll amount

// Add a click event listener to the next button
nextButton.addEventListener('click', () => {
    // Scroll the container horizontally
    scrollContainer.scrollBy({
        left: scrollStep,
        behavior: 'smooth' // Smooth scrolling
    });
});


const prevButton = document.getElementById('prev-button');

// Add a click event listener to the previous button
prevButton.addEventListener('click', () => {
    // Scroll the container horizontally in the opposite direction
    scrollContainer.scrollBy({
        left: -scrollStep,
        behavior: 'smooth' // Smooth scrolling
    });
});
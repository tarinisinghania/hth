const slideButton = document.getElementById('slideButton');
let isSlid = false;

slideButton.addEventListener('click', () => {
    isSlid = !isSlid; // Toggle the slide state
    slideButton.classList.toggle('slide');

    // Change the background color based on the button's state
    if (isSlid) {
        document.body.style.background = 'linear-gradient(90deg, #530d9e, #1c4eaa, #159999, #29b11a, #ded521, #e82222)'; // New gradient
    } else {
        document.body.style.background = 'black'; // Original gradient
    }
});
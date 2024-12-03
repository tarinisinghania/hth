document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('myHeading') });

    heading.addEventListener('click', function() {
        // Change the text color of specific spans
        const redText = heading.querySelector('.red-text');
        const greenText = heading.querySelector('.green-text');

        // Toggle colors on click
        if (redText.style.color === 'white') {
            redText.style.color = 'red'; // Change to another color if needed
        } else {
            redText.style.color}
        
        if (greenText.style.color === 'white') {
            greenText.style.color = 'green'; // Change to another color if needed
        } else {
            greenText.style.color}
        });
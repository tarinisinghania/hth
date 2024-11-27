const text = "These nerve plexuses control all of the energies at force within our body and secrete hormones.";
const typewriterText = document.getElementById("typewriterText");
let index = 0;

function type() {
    if (index < text.length) {
        typewriterText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed here (in milliseconds)
    } else {
        typewriterText.style.borderRight = 'none'; // Remove cursor after typing is done
    }
}

type(); // Start the typing effect


let button = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper1");
button.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "They are the root of all our physical, mental and emotional activities. Thus, each chakra is associated with certain physical, mental and emotional traits. When we experience disorders at the mental, emotional or physical level it is due to a ‘BLOCKAGE’ or obstacle or tension in these Chakras.";
  wrapper.appendChild(newItem);
});
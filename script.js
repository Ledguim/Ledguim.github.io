const btn = document.getElementById('changeBtn');
const input = document.getElementById('userInput');
const text = document.getElementById('dynamicText');

btn.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        text.innerText = input.value;
        input.value = ""; 
    } else {
        alert("Please write something first.");
    }
});
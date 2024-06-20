const textArea = document.getElementById('text-area');
const numbers = document.getElementById('numbers');
const buttonUpper = document.getElementById('button-upper');
const buttonLower = document.getElementById('button-lower');
const textList = document.getElementById('text-list');
const tasks = document.getElementById('tasks');

// Convierte todo el text-area en mayúsculas
buttonUpper.addEventListener('click', () => {
    textArea.value = textArea.value.toUpperCase();
});

// Convierte todo el text-area en minúsculas
buttonLower.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase();
});

const handleKeyDown = (event) => {
    const numberOfChars = textArea.value.length;
    const textMax = 255;
    if (textArea.value.length >= 255 && event.key !== "Backspace") {
        event.preventDefault();
    }

    if (numberOfChars >= 205) {
        numbers.style.color = 'red';
    } else {
        numbers.style.color = '#000';
    }

    numbers.textContent = `${numberOfChars}/${textMax}`;
};

textArea.addEventListener('keydown', handleKeyDown);

//Agrega las tareas
textList.addEventListener('click', () => {
    const text = textArea.value;
    const listItem = document.createElement('li');
    
    listItem.textContent = text;

    tasks.appendChild(listItem);
});

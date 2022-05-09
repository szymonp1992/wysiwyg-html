const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener('input', () => {
  const outputInnerHTML = input.value;
  output.innerHTML = outputInnerHTML;
  localStorage.setItem('inputValue', input.value);
  localStorage.setItem('outputValue', outputInnerHTML);
});

function getAllFromLocalStorage() {
  input.value = localStorage.getItem('inputValue');
  output.innerHTML = localStorage.getItem('outputValue');
}

getAllFromLocalStorage();

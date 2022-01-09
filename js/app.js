const numbers = document.getElementsByClassName('number');
const input = document.getElementById('input-text');
const addNumber = () => {
	input.value += numbers.value;
}
numbers.addEventListener('click', addNumber());

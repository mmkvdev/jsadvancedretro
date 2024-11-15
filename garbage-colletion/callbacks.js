const element = document.getElementById('button');
const onClick = () => alert('hi');

element.addEventListener('click', onClick);

element.removeEventListener('click', onClick);

element.parentNode.removeChild(element);
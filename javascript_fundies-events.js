const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World!');

const number2 = document.querySelector('#number2');
number2.addEventListener('click', (e) => {
    alert("Hello Worldly People");
    console.log(e);
})
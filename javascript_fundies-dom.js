// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const content1 = document.createElement('p');
content1.textContent = "Hey I'm red!";
content1.style.color = 'red';

container.appendChild(content1);

const content2 = document.createElement('h3');
content2.textContent = "I'm a blue h3!";
content2.style.color = 'blue';

container.appendChild(content2);

const content3 = document.createElement('div');
content3.setAttribute('style', 'border-style: solid; background-color: pink;');
content3.setAttribute('id', 'newDiv');
container.appendChild(content3);

const divcontainer = document.querySelector('#newDiv');

const content31 = document.createElement('h1');
content31.textContent = "I'm in a div";

divcontainer.appendChild(content31);

const content32 = document.createElement('p');
content32.textContent = "ME TOO!";

divcontainer.appendChild(content32);
/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let destino = JSON.parse(localStorage.getItem('destino'));


let {name, image, description, price} = destino;

console.log(name, image, description, price);

document.getElementById('placeName').textContent = name;
document.getElementById('placeImg').setAttribute('src', image);
document.getElementById('placeDescription').textContent = description;
document.getElementById('placePrice').textContent = `$ ${price}`;


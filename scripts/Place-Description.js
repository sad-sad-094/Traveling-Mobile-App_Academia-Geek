/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { destinos } from './data.js';

function seeDescription(sname) {

  let info = destinos.find(destino => destino.seasson == sname);

  localStorage.setItem('destino', JSON.stringify(info));
}



export { seeDescription }
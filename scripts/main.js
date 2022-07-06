/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import {seeDescription} from './Place-Description.js';

let spring = document.querySelector('#spring');
let summer = document.querySelector('#summer');
let autum = document.querySelector('#autum');
let winter = document.querySelector('#winter');


spring.addEventListener('click', () => seeDescription('spring'));
summer.addEventListener('click', () => seeDescription('summer'));
autum.addEventListener('click', () => seeDescription('autum'));
winter.addEventListener('click', () => seeDescription('winter'));

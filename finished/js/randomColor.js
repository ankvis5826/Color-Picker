//our impor file;
import { randomColor } from './randomColorCode.js';
import { rgbHex } from './rgbToHex.js';
import { getShade } from './shade.js';


//geting DOM
let colorBox = document.querySelector('#ColorBoxRC .color-Box');
let right = document.querySelector('#ColorBoxRC .right');
let left = document.querySelector('#ColorBoxRC .left');
let rgb = document.querySelector('#ColorCodeSecRC .rgb');
let hex = document.querySelector('#ColorCodeSecRC .hex');
let download = document.querySelector('#ColorCodeSecRC .download');


let accessedColors = [];

function updateUI(r,g,b){
   //this is for the box update
   colorBox.style.backgroundColor= `rgb(${r},${g},${b})`;
   //for code update 
   rgb.innerHTML = `rgb(${r},${g},${b})`;

    //this is for rgb tohex
    let rgbToHexObj  = new rgbHex(r,g,b); 
    hex.innerHTML = rgbToHexObj.convert();
    //here updating shades of color
    getShade(r,g,b);
    
}



function getColor(){
    let color = new randomColor();
     let  colorValue = color.value;
     let colorAsObj = {
         "r":colorValue[0],
         "g":colorValue[1],
         "b":colorValue[2]
     }
     accessedColors.push(colorAsObj);
     updateUI(colorAsObj.r,colorAsObj.g,colorAsObj.b);
}


//this is for left and right button
let track = 2;
left.addEventListener('click',()=>{
    let size = accessedColors.length;
    if((size<2 )|| track>size){
        alert('No color');
    }
    updateUI(accessedColors[size-track].r,accessedColors[size-track].g,accessedColors[size-track].b);
    track++;
})

right.addEventListener('click',()=>{
    getColor();
    track = 2
})




// //this is for color shade


/*this first time call */ getColor();

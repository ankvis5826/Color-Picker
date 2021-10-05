//our impor file;
import { makeColorShade } from './makeShade.js'
import { randomColor } from './randamColor.js'


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

    //this is for the hex code
    let hexCode = "#";
    let check = Number(r).toString(16);
    if (check <= 0) {
        hexCode += "00";
    }
    else {
        hexCode += check;
    }
    check = Number(g).toString(16);
    if (check <= 0) {
        hexCode += "00";
    }
    else {
        hexCode += check;
    }
    check = Number(b).toString(16);
    if (check <= 0) {
        hexCode += "00";
    }
    else {
        hexCode += check;
    }
    hex.innerHTML = hexCode;
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
let shade = new makeColorShade();
function getShade(r, g, b) {
    let dark = shade.makeDrak(r, g, b);

    let light = shade.makelight(r, g, b);
   
    let allShades = [];
    for (let i = 0; i < light.length; i++) {
        allShades[i] = light[light.length -1 - i ];

    }

    for (let i = 0; i < dark.length; i++) {
        allShades[light.length + i] = dark[i];
    }
   
    updateShadeUI(allShades);
    
}


function updateShadeUI(shades) {
    let shadeDiv = document.querySelector('#ColorShadeSecRC .colorShadeBox');
    shadeDiv.innerHTML =""; 
    for (let i = 0; i < shades.length; i++) {
        //geting color value 
        let r = shades[i].r;
        let g = shades[i].g;
        let b = shades[i].b;
        
        //this is for the hex code
        let hexCode = "#";
        let check = Number(r).toString(16);
        if (check <= 0) {
            hexCode += "00";
        }
        else {
            hexCode += check;
        }
        check = Number(g).toString(16);
        if (check <= 0) {
            hexCode += "00";
        }
        else {
            hexCode += check;
        }
        check = Number(b).toString(16);
        if (check <= 0) {
            hexCode += "00";
        }
        else {
            hexCode += check;
        }
      
        let sigleShade = ` <div class="shade">
        <div class="shadeColor colorShadeItem colorBox" style="background-color:rgb(${r}, ${g}, ${b});"></div>
        <div class="rgbCode colorShadeItem codeBox">rgb(${r}, ${g}, ${b})</div>
        <div class="hexCode colorShadeItem codeBox">${hexCode}</div>
      </div>`

        shadeDiv.innerHTML += sigleShade;
    }

}

/*this first time call */ getColor();

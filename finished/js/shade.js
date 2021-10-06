import { makeColorShade } from './makeShade.js';
import { rgbHex } from './rgbToHex.js';


export function getShade(r, g, b) {
    let shade = new makeColorShade();
    let dark = shade.makeDrak(r, g, b);

    let light = shade.makelight(r, g, b);

    let allShades = [];
    for (let i = 0; i < light.length; i++) {
        allShades[i] = light[light.length - 1 - i];

    }

    for (let i = 0; i < dark.length; i++) {
        allShades[light.length + i] = dark[i];
    }

    updateShadeUI(allShades);

}

function updateShadeUI(shades) {
    let shadeDiv = document.querySelector('#ColorShadeSec .colorShadeBox');
    shadeDiv.innerHTML = "";
    for (let i = 0; i < shades.length; i++) {
        //geting color value 
        let r = shades[i].r;
        let g = shades[i].g;
        let b = shades[i].b;

        //this is for the hex code
        //this is for rgb tohex
        let rgbToHexObj = new rgbHex(r, g, b);
        let hexCode = rgbToHexObj.convert()

        let sigleShade = ` <div class="shade">
        <div class="shadeColor colorShadeItem colorBox" style="background-color:rgb(${r}, ${g}, ${b});"></div>
        <div class="rgbCode colorShadeItem codeBox">rgb(${r}, ${g}, ${b})</div>
        <div class="hexCode colorShadeItem codeBox">${hexCode}</div>
      </div>`
        shadeDiv.innerHTML += sigleShade;
    }
}

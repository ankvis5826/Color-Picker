import { makeColorShade } from './makeShade.js';
import { randomColor } from './randamColor.js';
//"MYC" stand for makeYourColor page 

//for geting all use able Html element/
//---this is for the color box of myc
let MYCcolorBox = document.querySelector("#ColorBoxMYC .colorBoxMYC");


//-----this is for the control of myc
let MYCcontrolDiv = document.querySelectorAll("#ColorCodeMYC .inputControl");


let MYCcontrolBar = {
    R: MYCcontrolDiv[0].querySelector(".MYCrangeBar"),
    G: MYCcontrolDiv[1].querySelector(".MYCrangeBar"),
    B: MYCcontrolDiv[2].querySelector(".MYCrangeBar")
};
//---***for input Box('Number')
let MYCcontrolBarInput = {
    Rinput: MYCcontrolDiv[0].querySelector(".MYCrangeShow"),
    Ginput: MYCcontrolDiv[1].querySelector(".MYCrangeShow"),
    Binput: MYCcontrolDiv[2].querySelector(".MYCrangeShow")
};
//---this is for the code section
let MYCrgbCode = document.querySelector("#ColorCodeMYC .output .rgbColorCodeMYC");
let MYChexCode = document.querySelector("#ColorCodeMYC .output .hexColorCodeMYC");
//_______________this is for the second half___________________
//for ide
let MYCideWrite = document.querySelector('#ideMYC .four');

//function started
//---this for the all first color output which ramdomly come
let random = new randomColor;
let randomColorCode = random.value;
//-----geting color value
let R = randomColorCode[0];
let G = randomColorCode[1];
let B = randomColorCode[2];


for (const keys in MYCcontrolBar) {
    MYCcontrolBar[keys].addEventListener('change', () => {
        onUserChageBar();
    })
}



for (const keys in MYCcontrolBarInput) {
    MYCcontrolBarInput[keys].addEventListener('change', () => {
        onUserChageInput();

    })
}

function onUserChageBar() {
    let UserR = MYCcontrolBar['R'].value;
    let UserG = MYCcontrolBar['G'].value;
    let UserB = MYCcontrolBar['B'].value;
    MYCupdateUI(UserR, UserG, UserB);
    getShade(UserR, UserG, UserB);

}

function onUserChageInput() {
    let UserR = MYCcontrolBarInput['Rinput'].value;
    let UserG = MYCcontrolBarInput['Ginput'].value;
    let UserB = MYCcontrolBarInput['Binput'].value;
    MYCupdateUI(UserR, UserG, UserB);
    getShade(UserR, UserG, UserB);

   
}

function MYCupdateUI(r = R, g = G, b = B) {
    MYCcolorBox.style.backgroundColor = `rgb(${r},${g},${b})`;

    //this is for the bar
    MYCcontrolBar['R'].value = r;
    MYCcontrolBar['G'].value = g;
    MYCcontrolBar['B'].value = b;

    //this is for input Box
    MYCcontrolBarInput['Rinput'].value = r;
    MYCcontrolBarInput['Ginput'].value = g;
    MYCcontrolBarInput['Binput'].value = b;

    //this is for the code 
    MYCrgbCode.innerHTML = `rgb(${r},${g},${b})`;


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
    MYChexCode.innerHTML = hexCode;
    //this is for ide 
    MYCideWrite.innerHTML = `color:rgb(${r},${g},${b});`;

    //this function is for the color shade section update 
    
}
MYCupdateUI();

//this is for the ide btn
let MYCideTopBtn = document.querySelectorAll('#ideMYC .two ul li');

MYCideTopBtn[0].addEventListener('click', () => {
    MYCideWrite.innerHTML = "color:" + MYCrgbCode.innerHTML + ";"
});

MYCideTopBtn[1].addEventListener('click', () => {
    MYCideWrite.innerHTML = "background-color:" + MYCrgbCode.innerHTML + ";"
});


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
    let shadeDiv = document.querySelector('#ColorShadeSecMYC .colorShadeBox');
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

getShade(R,G,B);




import {randomColor } from './randamColor.js';
//"MYC" stand for makeYourColor page 

//for geting all use able Html element/
//---this is for the color box of myc
let MYCcolorBox = document.querySelector("#ColorBoxMYC .colorBoxMYC");


//-----this is for the control of myc
let MYCcontrolDiv = document.querySelectorAll("#ColorCodeMYC .inputControl");


let MYCcontrolBar = {
    R:MYCcontrolDiv[0].querySelector(".MYCrangeBar"),
    G:MYCcontrolDiv[1].querySelector(".MYCrangeBar"),
    B:MYCcontrolDiv[2].querySelector(".MYCrangeBar")
};
  //---***for input Box('Number')
let MYCcontrolBarInput = {
    Rinput:MYCcontrolDiv[0].querySelector(".MYCrangeShow"),
    Ginput:MYCcontrolDiv[1].querySelector(".MYCrangeShow"),
    Binput:MYCcontrolDiv[2].querySelector(".MYCrangeShow")
};
//---this is for the code section
let MYCrgbCode= document.querySelector("#ColorCodeMYC .output .rgbColorCodeMYC");
let MYChexCode= document.querySelector("#ColorCodeMYC .output .hexColorCodeMYC");


//function started
//---this for the all first color output which ramdomly come
let random = new randomColor;
let randomColorCode = random.value;


for (const keys in MYCcontrolBar) {
    MYCcontrolBar[keys].addEventListener('change',()=>{
        onUserChageBar();
    })
  }

  for (const keys in  MYCcontrolBarInput) {
    MYCcontrolBarInput[keys].addEventListener('change',()=>{
        onUserChageInput();
        
    })
  }

 function onUserChageBar(){
    let UserR = MYCcontrolBar['R'].value;
    let UserG = MYCcontrolBar['G'].value;
    let UserB = MYCcontrolBar['B'].value;
    MYCupdateUI(UserR,UserG,UserB);
 }

 function onUserChageInput(){
    let UserR = MYCcontrolBarInput['Rinput'].value;
    let UserG = MYCcontrolBarInput['Ginput'].value;
    let UserB = MYCcontrolBarInput['Binput'].value;
    MYCupdateUI(UserR,UserG,UserB);
 }



function MYCupdateUI(r=randomColorCode[0],g=randomColorCode[1],b=randomColorCode[2]){
   MYCcolorBox.style.backgroundColor = `rgb(${r},${g},${b})`;

   //this is for the bar
   MYCcontrolBar['R'].value =r;
   MYCcontrolBar['G'].value =g;
   MYCcontrolBar['B'].value =b;
   
   //this is for input Box
   MYCcontrolBarInput['Rinput'].value = r;
   MYCcontrolBarInput['Ginput'].value = g;
   MYCcontrolBarInput['Binput'].value = b;

   //this is for the code 
   MYCrgbCode.innerHTML=`rgb(${r},${g},${b})`;

   MYChexCode.innerHTML="#"+Number(r).toString(16)+""+Number(g).toString(16)+""+Number(b).toString(16);
}
MYCupdateUI();



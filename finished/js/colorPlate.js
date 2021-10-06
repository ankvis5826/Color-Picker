//this our import file


//this is our color arrays
let colors = {
    "Bright": ["FF0075", "172774", "77D970", "2C2891", "FFFD95", "8236CB", "290FBA",
        "F43B86", "FFE459", "368B85", "F8485E", "00C1D4", "185ADB", "FFC947", "125D98", "7952B3", "39A6A3",
        "BF1363", "2940D3", "99154E", "FFC93C", "FC92E3", "F55C47", "4AA96C",
        "FF8474", "FF6701", "9B3675", "F14668", "11698E", "FA1616", "12CAD6",
        "F54291", "FDCB9E", "FF7315", "5D13E7", "F30CD4", "F7FD04", "BB371A", "01C5C4",
        "440047", "753422", "753422", "FF5200"],
    "Neon": ["38ff7a", "28FFBF", "FF0075", "B1FFFD", "0CECDD", "F7FD04", "32E0C4", "f83094", "ff6c0a"],
    "Light": ["F9F3DF", "F9F3DF", "F9F3DF", "DBD0C0", "F9CF93", "FCFFA6", "FFADAD", "B5DEFF", "CAB8FF",
        "79B4B7", "FEFBF3", "9D9D9D", "D7E9F7", "F6A9A9", "BCFFB9", "F38BA0",
        "CDF0EA", "F7DBF0", "E4BAD4", "B6C9F0", "E4EFE7", "CCF2F4", "FBBEDF",
        "7579E7", "F7F6F2", "9E7777", "C8EED9"],
    "Dark": ["000000", "3D0000", "950101", "950101", "150050", "610094", "420516",
        "362222", "171010", "171717", "7B113A", "310B0B", "082032", "170055"]

}

//out Dom
let btn = document.querySelectorAll('#filterYC .filterBtn');
let colorbox = document.querySelector('#sampalColorYC .sampalContainer');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        let btnVlaue = e.target;
        updateColorBox(btnVlaue.innerHTML);
    })
}

function updateColorBox(value) {
    let size = colors[value].length;
    let colorArray = colors[value];
    colorbox.innerHTML = "";

    for (let i = 0; i < size; i++) {
        let colorUI = `<div class="sampalColorBox">
           <div class="color" style="background-color:#${colorArray[i]}">
            
           </div>
           <div class="code">
               <p>#${colorArray[i]}</p>
           </div>
         </div> `
        colorbox.innerHTML += colorUI;
    }

}

updateColorBox("Bright");






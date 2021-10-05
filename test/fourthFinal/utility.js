//this is for our color plate which is imported by github waya CND 
const pickr = Pickr.create({
    el: '.colorPlateGitBox',
    theme: 'classic', 

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,
        
        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            input: true
           
        }
    },
    container: '#colorPlateGit'
    
});
//for html DOM
//for color box
let boxcolor = document.querySelector('#colorPlateGit .colorOutBox');


pickr.on('change', (color) => {
    let userColor = color.toRGBA();
    
    boxcolor.style.backgroundColor =`rgba(${userColor[0]},${userColor[1]},${userColor[2]},${userColor[3]})`;

})

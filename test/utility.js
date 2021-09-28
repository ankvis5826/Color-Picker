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

export class makeColorShade {
    constructor() {
        
    }
    makeDrak(r, g, b) {
        //for making Drack doing minus 
        let drakShadeArray = [];
        let R = r;
        let G = g;
        let B = b;
        const minus = 15;
        for (let i = 0; i < 8; i++) {

            if (R <=0 & G <= 0 & B <= 0) {
                return drakShadeArray;
            }
            //this is for the r color
            if (R <= 15) {
                R = 0;
            } else {
                R = R - minus;
            }
            //this is for the g color

            if (G <= 15) {
                G = 0;
            } else {
                G = G - minus;
            }
            //this is for the b color
            if (B <= 15) {
                B = 0;  
            } else {
                B = B - minus;
            }
            drakShadeArray[i] = { "r": R, "g": G, "b": B };
        }
        return drakShadeArray;
    }
    //this function is for light shade
    makelight(r, g, b) {
        //for making Drack doing minus 
        let lightShadeArray = [];
        let R = Number(r);
        let G = Number(g);
        let B = Number(b);
        const pluse = 15;
        for (let i = 0; i < 8; i++) {
            if ((R >=240) & (G >= 240) & (B >= 240)) {
              

                return lightShadeArray;
                
            }
            //this is for the r color
            if (R >= 255) {
                R = 255;
               

            } else {
                R = R + pluse;


            }
            //this is for the g color

            if (G  >= 255) {
                G = 255;

            
            } else {
                G =G+ pluse;

               
            }
            //this is for the b color
            if (B  >= 255) {
                B = 255;

            } else {
                B = B + pluse;
                

            }
            lightShadeArray[i] = { "r": R, "g": G, "b": B };

        }
        
        return lightShadeArray;
        

    }
}






























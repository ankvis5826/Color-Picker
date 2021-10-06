export class rgbHex{
    constructor(r,g,b){
           this.R = r;
           this.G = g;
           this.B = b;
    }  
    convert(){
        let hexCode = "#";
        let check = Number(this.R).toString(16);
        if (check <= 0) {
            hexCode += "00";
        }
        else {
            hexCode += check;
        }
        check = Number(this.G).toString(16);
        if (check <= 0) {
            hexCode += "00";
        }
        else {
            hexCode += check;
        }
        check = Number(this.B).toString(16);
        if (check <= 0) {
            hexCode += "00";
        }
        else {
            hexCode += check;
        }
        return hexCode;
    }
}


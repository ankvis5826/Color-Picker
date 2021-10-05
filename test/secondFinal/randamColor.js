export class randomColor {
  constructor(){
     this.r = parseInt(Math.random()*255);
     this.g = parseInt(Math.random()*255);
     this.b = parseInt(Math.random()*255);
  }
  get value(){
       return [this.r,this.g,this.b];
       
  }
   
};

class GreeterNormal {
  message: string;
  greet() {console.log(this.message);}
  constructor(initialMessage: string) {this.message = initialMessage;}
}
class GreeterArrow {
  message: string;
  greet: ()=>void = ()=>{console.log(this.message);};
  constructor(initialMessage: string) {this.message = initialMessage;}
}
const greeterNormal = new GreeterNormal('こんにちは');
const greeterArrow = new GreeterArrow('こんにちは');
console.log(greeterNormal);
console.log(greeterArrow);

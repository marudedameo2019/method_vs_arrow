class Greeter {
  message: string;
  greet: ()=>void = ()=>{console.log(this.message);};
  constructor(initialMessage: string) {this.message = initialMessage;}
}
const greeter = new Greeter('こんにちは');
greeter.greet();


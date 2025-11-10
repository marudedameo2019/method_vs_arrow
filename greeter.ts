class Greeter {
  message: string;
  greet() {console.log(this.message);}
  constructor(initialMessage: string) {this.message = initialMessage;}
}
const greeter = new Greeter('こんにちは');
greeter.greet();


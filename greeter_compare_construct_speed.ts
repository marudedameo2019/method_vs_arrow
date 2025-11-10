import { Bench } from 'tinybench'
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
const bench = new Bench({ name: 'constructor benchmark', time: 100 });
const OBJ_COUNT = 10000;
const create = <T>(N: number, Class: new (_:string) => T): T[] =>{
  return Array(N).fill(null).map(()=>{
    return new Class('こんにちは');
  });
};
bench.add('Normal', ()=>{
  const o = create(OBJ_COUNT, GreeterNormal);
})
.add('Arrow', ()=>{
  const o = create(OBJ_COUNT, GreeterArrow);
});
(async()=>{
  await bench.run();
  console.log(bench.name);
  console.table(bench.table());
})();

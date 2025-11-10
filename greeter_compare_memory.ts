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
const OBJ_COUNT = 10000;
const create = <T>(N: number, Class: new (_:string) => T): T[] =>{
  return Array(N).fill(null).map(()=>{
    return new Class('こんにちは');
  });
};
const usage1 = process.memoryUsage();
const o1 = create(OBJ_COUNT, GreeterNormal);
const usage2 = process.memoryUsage();
console.log(`GreeterNormal(rss): ${(usage2.rss - usage1.rss) / 1024} KB`);
console.log(`GreeterNormal(heapUsed): ${(usage2.heapUsed - usage1.heapUsed) / 1024} KB`);
const o2 = create(OBJ_COUNT, GreeterArrow);
const usage3 = process.memoryUsage();
console.log(`GreeterArrow(rss): ${(usage3.rss - usage2.rss) / 1024} KB`);
console.log(`GreeterNormal(heapUsed): ${(usage3.heapUsed - usage2.heapUsed) / 1024} KB`);
console.log(o1[OBJ_COUNT-1]);
console.log(o2[OBJ_COUNT-1]);
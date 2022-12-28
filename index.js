// Follow along with the examples here
function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
sayHelloToSamip();

function doSomething(thing) {
  console.log(thing);
}
doSomething("Giselle")

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}`);
}
sayHelloTo("giselle")

function say(greeting, firstName) {
  console.log("i was called");
  return `${greeting}, ${firstName}`;
}
console.log(say("Howd","Giselle"))
  
}
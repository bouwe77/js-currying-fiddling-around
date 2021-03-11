function robot(task) {
  return function (transport) {
    return function (name) {
      return `Robot ${name} can ${transport} in order to ${task}`;
    };
  };
}

const flyingTransport = robot("transport goods")("fly");
const hoveringPatrol = robot("patrol the beach")("hover");

console.log(flyingTransport("Robot1"));
console.log(hoveringPatrol("Robot2"));

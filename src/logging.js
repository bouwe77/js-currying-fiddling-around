// ========================================================
// Version 1: Introducing the log function
function example1() {
  //
  //
  //
  function log(datetime, severity, message) {
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  const datetime = new Date();
  log(datetime, "INFO", "This is an informational message");
  log(datetime, "ERROR", "An exception occurred");
}
//example1()

// ========================================================
// Version 2: Making the code more declarative
function example2() {
  //
  //
  //
  function log(datetime, severity, message) {
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  const utcDate = new Date();
  const logInformation = (message) => log(utcDate, "INFO", message);
  const logError = (message) => log(utcDate, "ERROR", message);

  logInformation("This is an informational message");

  logError("An exception occurred");
}

//example2();

// ========================================================
// Version 3: Currying
function example3() {
  //
  //
  //

  // function log(datetime) {
  //   return function (severity) {
  //     return function (message) {
  //       console.log(`${datetime} [${severity}] - ${message}`);
  //     };
  //   };
  // }
  const log = (datetime) => (severity) => (message) =>
    console.log(`${datetime} [${severity}] - ${message}`);

  const utcDate = new Date();
  const logInformation = log(utcDate)("INFO");
  const logError = log(utcDate)("ERROR");

  logInformation("This is an informational message!");

  logError("An exception occurred!");
}

example3();

// setTimeout:
// -> The setTimeout function is used to execute a function or a block of code after a specified delay. It takes two arguments: the function or code to be executed and the time delay (in milliseconds) before the execution.

// Example: Execute a function after 3 seconds
setTimeout(function () {
  console.log("This function will be executed after 3 seconds.");
}, 3000);

setTimeout(function (name) {
  console.log("This function will be executed after 3 seconds.", `${name}`);
}, 3000, "khem");

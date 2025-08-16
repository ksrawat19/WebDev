// setInterval:
// -> The setInterval function is used to repeatedly execute a function or a block of code at a specified interval. It takes two arguments: the function or code to be executed and the time interval (in milliseconds) between each execution.

// Example: Execute a function every 2 seconds
setInterval(function () {
  console.log("This function will be executed every 2 seconds.");
}, 2000);


setInterval((param)=>{
    console.log(`Namste ${param}`);
}, 2000, "khem");
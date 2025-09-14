// The module wrapper in Node.js is a clever behind-the-scenes mechanism that makes each file behave like a self-contained module. Before your code runs, Node.js wraps it in a function like this:

const message = "Hello, Khem!";
console.log(message);

// You don’t have to create the module wrapper yourself—Node.js automatically generates it behind the scenes every time you run a .js file as a module
// Node.js secretly wraps it like this before execution:👇

(function (exports, require, module, __filename, __dirname) {
  const message = "Hello, Khem!";
  console.log(message);
});

// wrapper helps you:
// Avoid polluting the global scope
// Structure your code cleanly across files
// Customize behavior (yes, you can even override the wrapper using Module.wrap)
// Using Modern import/export in Node.js
// By default, Node.js uses CommonJS (require, module.exports). To switch to ES Modules (import, export), you have two options:

// Option 1: Rename to .mjs
// Rename your file from .js to .mjs

// Node will treat it as an ES Module
// js
import express from 'express.mjs';
export const greet = name => `Hello, ${name}`;

// But you lose access to:
// require()
// __dirname
// __filename
// These are not available in native ES Modules

// Option 2: Set "type": "module" in package.json
// Keep your .js files

// Add this to your package.json by npm init -y:

// {
//   "type": "module"
// }

// Now you can use import/export in .js files
// You must include file extensions:
// js
import { add } from './math.js';
import express from 'express';
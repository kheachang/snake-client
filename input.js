// input.js manages all client inputs to communicate with server 
const connect = require('./client');
const conn = require('./client');

// this is the connect function or conn object 
let connection; 

const handleUserInput = function(keyStroke) {
  if (keyStroke === '\u0003') {
    console.log('Game over. Goodbye!');
    process.exit();
  }
  if (keyStroke === 'w') {
    connection.write('Move: up')
  }
  if (keyStroke === 'a') {
    connection.write('Move: left')
  }
  if (keyStroke === 's') {
    connection.write('Move: down')
  }
  if (keyStroke === 'd') {
    connection.write('Move: right')
  }
  if (keyStroke === 'q') {
    connection.write('Say: Wheeeee')
  }
  if (keyStroke === 'e') {
    connection.write('Say: Gooooo')
  }
}

// setup interface to handle user input from stdin
// this helps establish ability for player using keyboard to move the snake


// now setupInput can accept an object that lets you interact with the server. 
// connect() function returns object conn 
// setupInput() places a reference to conn in another variable connection which is in a global scope of that module
// When data comes in from your keyboard, the stdin event handler can now interact with the server because the scope -
// in the handler now includes both data from the keyboard AND the connection object!

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event listener will wait for data input before calling handleUserInput callback
  stdin.on("data", handleUserInput)
  return stdin;
};


module.exports = setupInput;

// Our play.js file is handling all the logic for setting up and handling user input
const connect = require("./client");
const setupInput = require("./input");

// console logs while client.js connects
console.log("Connecting ...");
// server kicked out my snake for idling

//connect() returns conn
setupInput(connect());

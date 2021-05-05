// client.js file inclues everything involved with the server
const net = require("net");
const { host, port } = require("./constants");

// connect() returns an object (conn) that can be used to interact with the server
const connect = function () {
  // establishes connection with the server
  const conn = net.createConnection({
    host,
    port,
  });

  // when it connects to the server, callback will run
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // when it receives data from server, data callback will run
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    // when it connects to the server, send the string of your name to the server
    // this data that is sent to the server is printed in the game
    conn.write("Name: KCC");
    // when it connects to the server, send instructions to move up to the server by sending a string
    conn.write("Move: up");
  });

  // connect function returns this conn object that we can use in other files
  return conn;
};

module.exports = connect;

'use strict'

var http = require('http');

var WebSocketServer = require('websocket').server;

// Used for managing the text chat user list.

let connectionArray = [];
let nextID = Date.now();
let appendToMakeUnique = 1;



const log = (text) => {
  let time = new Date();

  console.log("[" + time.toLocaleTimeString() + "] " + text);
}

const originIsAllowed = (origin) => {
  return true;    // We will accept all connections
}


const isUsernameUnique = (name) => {
  let isUnique = true;
  let i;

  for (i=0; i<connectionArray.length; i++) {
    if (connectionArray[i].username === name) {
      isUnique = false;
      break;
    }
  }
  return isUnique;
}


const sendToOneUser = (target, msgString) => {
  let isUnique = true;
  let i;

  for (i=0; i<connectionArray.length; i++) {
    if (connectionArray[i].username === target) {
      connectionArray[i].sendUTF(msgString);
      break;
    }
  }
}


const getConnectionForID = (id) => {
  let connect = null;
  let i;

  for (i=0; i<connectionArray.length; i++) {
    if (connectionArray[i].clientID === id) {
      connect = connectionArray[i];
      break;
    }
  }

  return connect;
}


const makeUserListMessage = () => {
  let userListMsg = {
    type: "userlist",
    users: []
  };
  let i;

  // Add the users to the list

  for (i=0; i<connectionArray.length; i++) {
    userListMsg.users.push(connectionArray[i].username);
  }

  return userListMsg;
}


const sendUserListToAll = () => {
  let userListMsg = makeUserListMessage();
  let userListMsgStr = JSON.stringify(userListMsg);
  let i;

  for (i=0; i<connectionArray.length; i++) {
    connectionArray[i].sendUTF(userListMsgStr);
  }
}




let httpServer = http.createServer((request, response) => {
  log("Received secure request for " + request.url);
  response.writeHead(404);
  response.end();
});


httpServer.listen(6503, () => {
  log("Server is listening on port 6503");
});



let wsServer = new WebSocketServer({
  httpServer: httpServer,
  autoAcceptConnections: false
});


wsServer.on('request', (request) => {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    log("Connection from " + request.origin + " rejected.");
    return;
  }



  let connection = request.accept("json", request.origin);



  log("Connection accepted from " + connection.remoteAddress + ".");
  connectionArray.push(connection);

  connection.clientID = nextID;
  nextID++;



  let msg = {
    type: "id",
    id: connection.clientID
  };
  // connection.sendUTF(JSON.stringify(msg));


});
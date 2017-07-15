const light = require("./luxafor/luxafor.js");
const Websocket = require("websocket").w3cwebsocket;

const url = process.argv.length > 2 ? process.argv[2] : 'ws://localhost:8081';

console.log("Trying to connect to " + url);

const client = new Websocket(url);

client.onerror = function() {
    console.log('Connection Error');
};
 
client.onopen = function() {
    console.log('WebSocket Client Connected');
};
 
client.onclose = function() {
    console.log('Client Closed');
};
 
client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        const data = JSON.parse(e.data);

        if(data.build && data.build.status === "error") {
            light.setAlarm();
        } else {
            console.warn("Input malformed", e.data);
        }
    }
};
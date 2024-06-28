const WebSocket = require('ws');
const os = require('os');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  // Send the initial message
  ws.send(`Hello from ${os.hostname()}!`);

  // Send a message every 5 seconds
  const interval = setInterval(() => {
    ws.send(`Hello from ${os.hostname()}!`);
  }, 5000);

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
    clearInterval(interval); // Stop sending messages when the client disconnects
  });
});

console.log('WebSocket server started on port 8080');

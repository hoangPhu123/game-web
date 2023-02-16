import { io } from 'socket.io-client';

let socket;
export const initiateSocketConnection = (token) => {
  socket = io('http://localhost:3000', {
    auth: {
      token
    },
    transports: ["websocket"]
  });
  console.log(`Connecting socket...`);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
}

export const subscribeToChat = (cb) => {
  socket.emit('my message', 'Hello there from React.');
  if (!socket) return (true);
  socket.on('my broadcast', msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}

// Handle message receive event
export const subscribeToMessages = (cb) => {
  if (!socket) return (true);
  socket.on('message', msg => {
    return cb(null, msg);
  });
}

export const joinRoom = (roomName) => {
  setTimeout(() => {
    if (!socket) return (true);
    socket.emit('join', roomName);
  }, 1000);
}

export const subscribeJoinRoom = (cb) => {
  if (!socket) return (true);
  socket.on('join', msg => {
    return cb(null, msg);
  });
}


export const sendMessage = ({ message, roomName }, cb) => {
  if (socket) socket.emit('message', { message, roomName }, cb);
}


export const playTurn = ({ message, roomName }, cb) => {
  if (socket) socket.emit('caro-play-turn', { message, roomName }, cb);
}


// Handle message receive event
export const subscribeToPlayTurn = (cb) => {
  if (!socket) return (true);
  socket.on('caro-play-turn', msg => {
    return cb(null, msg);
  });
}


export const startGame = (roomName, cb) => {
  if (socket) socket.emit('caro-start-game', roomName , cb);
}

export const subscribeStartGame = (cb) => {
  if (!socket) return (true);
  socket.on('caro-start-game', msg => {
    return cb(null, msg);
  });
}
const socketIo = require('socket.io');
const userModel = require('./models/user');
const employeeModel = require('./models/employee');

let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Register the socket ID of the user or employee when joining
    socket.on('join', async (data) => {
      const { userId, userType } = data;

      if (userType === 'user') {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === 'employee') {
        await employeeModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

// Send a real-time message to a specific socketId
const sendMessageToSocketId = (socketId, messageObject) => {
  console.log(messageObject);

  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log('Socket.io not initialized.');
  }
};

module.exports = { initializeSocket, sendMessageToSocketId };

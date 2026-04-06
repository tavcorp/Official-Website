import { Server } from 'socket.io';
import userModel from './models/user.model.js';
// import employeeModel from './models/employee.js';

let io;

export function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('join', async (data) => {
      const { userId, userType } = data;

      if (userType === 'user') {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
      // else if (userType === 'employee') {
      //   await employeeModel.findByIdAndUpdate(userId, { socketId: socket.id });
      // }
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

// named export
export const sendMessageToSocketId = (socketId, messageObject) => {
  console.log(messageObject);

  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log('Socket.io not initialized.');
  }
};
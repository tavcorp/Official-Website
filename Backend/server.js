import "./config/env.js";  // ✅ MUST BE FIRST

import cors from 'cors';
import http from 'http';
import app from './app.js';

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

// initializeSocket(server);


server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

// const { errorHandler } = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const employeeRoutes = require('./routes/employee');

// const userRoutes = require('./routes/user.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Example route
app.get('/', (req, res) => {
  res.send('Hello Welcome to Roatify!');
});


// Routes
// app.use('/api/users', userRoutes);
app.use('/users', userRoutes);
app.use('/employee', employeeRoutes);

// Error handler
// app.use(errorHandler);


module.exports = app;
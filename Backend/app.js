import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import connectDB from './config/db.js';

import authRoutes from './routes/auth.route.js';
// import userRoutes from './routes/user.routes.js';
// import contactRoute from './routes/contact.routes.js';

const app = express();

const corsOptions = {
  origin: `${process.env.BASE_URL}`,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// Connect to database
connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.raw({ type: 'application/json' }));

// app.use('/users', userRoutes);
// app.use('/contact_form', contactRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the backend of the website");
});

app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Error 404: Resource not found" });
});

export default app;
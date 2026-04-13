import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import connectDB from './config/db.js';

import authRoutes from './routes/auth.route.js';
import contactRoute from './routes/contact.route.js';

const app = express();

const corsOptions = {
  // origin: `${process.env.BASE_URL}`,
  origin: "http://localhost:5173",
  credentials: true,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Connect to database
connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.raw({ type: 'application/json' }));

// app.use('/users', userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the backend of the website");
});

app.use("/api/auth", authRoutes);
app.use('/contact_form', contactRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Error 404: Resource not found" });
});

export default app;
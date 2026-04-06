# Backend Documentation

## Overview

This repository contains the backend for the TavCorp official website. It is built with Node.js, Express, and MongoDB, and handles user authentication, email verification, password reset flows, and protected route checks.

## Folder Structure

- `server.js` - Server bootstrap file that loads environment variables and starts the HTTP server.
- `app.js` - Express application configuration, middleware registration, route mounting, and the API entry point.
- `config/db.js` - MongoDB connection logic.
- `config/env.js` - Loads environment variables using `dotenv`.
- `controllers/auth.controller.js` - Authentication controllers for signup, login, logout, email verification, password reset, and auth checks.
- `routes/auth.route.js` - Auth route definitions.
- `middlewares/verifyToken.js` - JWT cookie validation middleware.
- `models/user.model.js` - User schema definition for MongoDB.
- `utils/generateTokenAndSetCookie.js` - Generates JWT tokens and attaches them to response cookies.
- `mailtrap/mailtrap.config.js` - Mailtrap client configuration.
- `mailtrap/emails.js` - Email sending helper functions.
- `mailtrap/emailTemplates.js` - HTML templates used for verification and password reset emails.

## Requirements

- Node.js 18+ (or compatible with `type: module`)
- MongoDB database instance
- Mailtrap API token for email delivery
- A `.env` file with the required environment variables

## Setup

1. Install dependencies:

```bash
cd Backend
npm install
```

2. Create a `.env` file in `Backend/` with the following variables:

```text
PORT=4000
BASE_URL=http://localhost:5173
CLIENT_URL=http://localhost:5173
MONGO_URL=mongodb+srv://<user>:<password>@<cluster>/<dbname>
JWT_SECRET=your_jwt_secret
MAILTRAP_API_TOKEN=your_mailtrap_token
NODE_ENV=development
```

3. Start the server in development mode:

```bash
npm run dev
```

4. Or start in production mode:

```bash
npm start
```

## Server Entry Points

### `server.js`

- Loads `config/env.js` first to ensure environment variables are available.
- Imports `app` from `app.js`.
- Creates an HTTP server and starts listening on `process.env.PORT` or `4000`.

### `app.js`

- Loads environment variables again using `dotenv.config()`.
- Configures Express with JSON parsing, URL-encoded body parsing, cookie parsing, raw JSON body parsing, and CORS.
- Uses `connectDB()` to connect to MongoDB before accepting requests.
- Mounts the auth routes at `/api/auth`.
- Provides a default root route for health checks.
- Adds a 404 JSON fallback for unknown API routes.

## Environment Variables

Required env variables:

- `PORT` - Server port (optional, defaults to `4000`).
- `BASE_URL` - Allowed origin for CORS.
- `CLIENT_URL` - Frontend URL used in password reset email links.
- `MONGO_URL` - MongoDB connection string.
- `JWT_SECRET` - Secret used to sign JWT tokens.
- `MAILTRAP_API_TOKEN` - Mailtrap API token used for email delivery.
- `NODE_ENV` - Set to `production` for secure cookies in production.

## MongoDB Model

### `models/user.model.js`

The `User` schema contains:

- `username` - Required string, minimum length 3.
- `email` - Required unique string with email validation.
- `password` - Required string, minimum length 6, excluded by default from queries.
- `lastLogin` - Date of last successful login.
- `isVerified` - Boolean that marks email verification status.
- `resetPasswordToken` - Token created for password reset requests.
- `resetPasswordExpiresAt` - Expiration timestamp for reset tokens.
- `verificationToken` - Verification code used during signup.
- `verificationTokenExpires` - Expiration timestamp for the email verification code.

The schema also enables automatic `createdAt` and `updatedAt` timestamps.

## Authentication Flow

### `utils/generateTokenAndSetCookie.js`

- Creates a JWT using `jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })`.
- Sets a cookie named `token` with:
  - `httpOnly: true`
  - `secure: true` when `NODE_ENV === "production"`
  - `sameSite: "strict"`
  - `maxAge` 7 days
- Returns the generated token.

### `middlewares/verifyToken.js`

- Reads `req.cookies.token`.
- Returns 401 if nothing is present.
- Verifies the token using `jwt.verify(token, process.env.JWT_SECRET)`.
- Attaches `req.userId = decoded.userId` when valid.
- Returns 401 on invalid token.

## Auth Routes

All auth routes are mounted under `/api/auth`.

### `POST /api/auth/signup`

Registers a new user.

Request body:

```json
{
  "email": "user@example.com",
  "password": "securePassword",
  "username": "username"
}
```

Behavior:

- Validates required fields.
- Checks whether a user already exists with the same email.
- Hashes the password using `bcryptjs.hash(password, 10)`.
- Creates a 6-digit verification token.
- Saves the new user with `verificationToken` and `verificationTokenExpires`.
- Sends a verification email using `sendVerificationEmail()`.
- Generates a JWT and stores it in a secure cookie.
- Returns the new user object without the password.

Response example:

```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "_id": "...",
    "email": "user@example.com",
    "username": "username",
    "isVerified": false,
    "lastLogin": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### `POST /api/auth/login`

Logs in an existing user.

Request body:

```json
{
  "email": "user@example.com",
  "password": "securePassword"
}
```

Behavior:

- Finds the user by email and explicitly selects the password field.
- Validates the provided password with `bcryptjs.compare()`.
- Generates a JWT cookie using `generateTokenAndSetCookie()`.
- Updates `lastLogin`.
- Returns user details without the password.

### `POST /api/auth/logout`

Logs out the user by clearing the `token` cookie.

Response:

```json
{ "success": true, "message": "Logged out successfully" }
```

### `POST /api/auth/verify-email`

Verifies a user email.

Request body:

```json
{
  "code": "123456"
}
```

Behavior:

- Finds a user matching the verification token and expiration date.
- Marks `isVerified = true`.
- Removes `verificationToken` and `verificationTokenExpires`.
- Sends a welcome email via `sendWelcomeEmail()`.
- Returns updated user details without the password.

### `POST /api/auth/forgot-password`

Starts password reset workflow.

Request body:

```json
{ "email": "user@example.com" }
```

Behavior:

- Finds the user by email.
- Generates a secure token with `crypto.randomBytes(20).toString('hex')`.
- Stores `resetPasswordToken` and `resetPasswordExpiresAt`.
- Sends a reset link email using `sendResetPasswordEmail()`.
- The reset URL uses `process.env.CLIENT_URL` and includes the token.

### `POST /api/auth/reset-password/:token`

Completes password reset.

Route parameter:

- `token` - password reset token from the email link.

Request body:

```json
{ "password": "newSecurePassword" }
```

Behavior:

- Validates the token and expiration.
- Hashes the new password.
- Clears reset token values.
- Sends a confirmation email with `sendResetSuccessEmail()`.
- Returns success when the password is updated.

### `GET /api/auth/check-auth`

Protected route to verify the current JWT session.

Behavior:

- Requires `verifyToken` middleware.
- Returns auth status and optionally user information from `checkAuth()`.

## Email Delivery

### `mailtrap/mailtrap.config.js`

- Imports `MailtrapClient` from the `mailtrap` package.
- Uses `process.env.MAILTRAP_API_TOKEN` as the API token.
- Exports `mailtrapClient` and a static `sender`.

### `mailtrap/emails.js`

Functions:

- `sendVerificationEmail(email, verificationToken)`
  - Sends the signup verification email using `VERIFICATION_EMAIL_TEMPLATE`.
- `sendWelcomeEmail(email, name)`
  - Sends a welcome email using a Mailtrap template UUID.
- `sendResetPasswordEmail(email, resetURL)`
  - Sends a reset link email using `PASSWORD_RESET_REQUEST_TEMPLATE`.
- `sendResetSuccessEmail(email)`
  - Sends a confirmation email using `PASSWORD_RESET_SUCCESS_TEMPLATE`.

### `mailtrap/emailTemplates.js`

Includes HTML templates for:

- Email verification with a numeric code placeholder.
- Password reset request with a button link placeholder.
- Password reset success confirmation.

## Security Notes

- JWT token is stored in an `httpOnly` cookie for added protection against XSS.
- Reset and verification tokens are stored with expirations.
- Passwords are hashed with `bcryptjs` before database storage.
- The `email` field is validated and normalized to lowercase.
- CORS is restricted to the configured `BASE_URL`.

## Error Handling

- `app.js` returns a JSON 404 response for unhandled routes.
- Controllers respond with status `400` for invalid input or failed operations.
- `verifyToken` returns `401` on missing or invalid JWT tokens.

## Development Notes

- The backend uses ES modules (`type: module` in `package.json`).
- `nodemon` is configured as a dev dependency for automatic restart in development.
- The code imports `dotenv` multiple times to ensure env var availability during startup.

## Quick Reference

- `npm run dev` — start dev server with `nodemon`
- `npm start` — start the server normally
- API base path — `/api/auth`

## Recommended Improvements

- Add validation middleware for request bodies using `express-validator`.
- Add a centralized error handler middleware.
- Add route protection for future user/contacts APIs.
- Add unit tests for controller logic and middleware.

---

For additional details, check the individual files in `Backend/controllers`, `Backend/routes`, `Backend/models`, and `Backend/mailtrap`.

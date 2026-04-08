import { useState } from "react";
import { useAuthStore } from "./store/authStore";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Password</h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <p>
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button} disabled={isLoading}>
            {isLoading ? "Loading..." : "Send Reset Link"}
          </button>
        </form>
      ) : (
        <div style={styles.successBox}>
          <p>
            If an account exists for <b>{email}</b>, you will receive a password reset link shortly.
          </p>
        </div>
      )}

      <div style={styles.footer}>
        <Link to="/LoginPage">← Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  successBox: {
    marginTop: "20px",
  },
  footer: {
    marginTop: "20px",
  },
};
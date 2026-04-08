import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div style={styles.container}>
      <h2>Welcome Back</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <div style={styles.linkContainer}>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" disabled={isLoading} style={styles.button}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>

      <div style={styles.footer}>
        <p>
          Don't have an account? <Link to="/SignUpPage">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

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
  linkContainer: {
    textAlign: "right",
    marginBottom: "10px",
  },
  error: {
    color: "red",
  },
  footer: {
    marginTop: "20px",
  },
};
import { useAuthStore } from "./store/authStore";
import { formatDate } from "./utils/date";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>

      <div style={styles.card}>
        <h3>Profile Information</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      <div style={styles.card}>
        <h3>Account Activity</h3>
        <p>
          <strong>Joined: </strong>
          {new Date(user.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>
          <strong>Last Login: </strong>
          {formatDate(user.lastLogin)}
        </p>
      </div>

      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "6px",
    textAlign: "left",
  },
  button: {
    padding: "10px",
    width: "100%",
    cursor: "pointer",
  },
};
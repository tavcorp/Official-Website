import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //  Store token
  const storeTokenInLS = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  //  Logout
  const logout = async () => {
    try {
      await fetch("http://localhost:4000/users/logout", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.error(err);
    }

    // Always clear state (don’t depend on backend response)
    setToken("");
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  //  Authenticate user (FIXED)
  const userAuthentication = async () => {
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoggedIn(true);
      } else {
        //  HANDLE 401 HERE
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        setToken("");
      }
    } catch (error) {
      console.log("Error fetching user data");
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return authContextValue;
};
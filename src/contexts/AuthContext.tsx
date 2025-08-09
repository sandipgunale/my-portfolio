import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  displayName: string;
  email: string;
  photoURL?: string;
  token?: string;
  expiresAt?: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  signIn: async () => {},
  signOut: async () => {},
  clearError: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  // Basic token decode for demo
  const verifyToken = async (token: string): Promise<User> => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (!payload.sub || !payload.email) {
        throw new Error("Invalid token payload");
      }
      return {
        id: payload.sub,
        displayName: payload.name || "User",
        email: payload.email,
        photoURL: payload.picture,
        token,
        expiresAt: payload.exp ? payload.exp * 1000 : Date.now() + 3600 * 1000,
      };
    } catch (err) {
      throw new Error("Invalid authentication token");
    }
  };

  const signIn = async (token: string) => {
    try {
      setLoading(true);
      const verifiedUser = await verifyToken(token);
      localStorage.setItem("auth_token", token);
      setUser(verifiedUser);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    localStorage.removeItem("auth_token");
    setUser(null);
    setLoading(false);
  };

  // Check auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (token) {
        try {
          const verifiedUser = await verifyToken(token);
          setUser(verifiedUser);
        } catch {
          setUser(null);
          localStorage.removeItem("auth_token");
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn, signOut, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

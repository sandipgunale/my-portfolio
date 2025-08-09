// src/contexts/AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithGoogle, 
  signOut as signOutService, 
  onAuthStateChange, 
  User as AuthUser 
} from '../services/authService';
import defaultAvatar from '../assets/default-avatar.png';

export interface User extends AuthUser {} // Extend to keep types consistent

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

// Helper to add default avatar and displayName if missing
const enhanceUser = (user: User): User => ({
  ...user,
  photoURL: user.photoURL || defaultAvatar,
  displayName: user.displayName || user.email || 'Anonymous User',
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signIn = async () => {
    try {
      const signedInUser = await signInWithGoogle();
      if (signedInUser) {
        setUser(enhanceUser(signedInUser));
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const signOut = async () => {
    try {
      await signOutService();
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange((currentUser) => {
      if (currentUser) {
        setUser(enhanceUser(currentUser));
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {!loading ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

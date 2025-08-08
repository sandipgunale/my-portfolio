import { 
  signInWithPopup, 
  signInWithRedirect, 
  getRedirectResult, 
  signOut as firebaseSignOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

// Try popup first, fallback to redirect
export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return mapUser(user);
  } catch (error: any) {
    console.error('Error signing in with Google:', error);

    if (error.code === 'auth/popup-blocked') {
      console.warn('Popup blocked — falling back to redirect sign-in.');
      await signInWithRedirect(auth, googleProvider);
    }

    throw error;
  }
};

// Handle redirect result after reload
export const checkRedirectResult = async (): Promise<User | null> => {
  const result = await getRedirectResult(auth);
  if (result?.user) {
    return mapUser(result.user);
  }
  return null;
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      callback(mapUser(firebaseUser));
    } else {
      callback(null);
    }
  });
};

// Helper to map Firebase user to our User type
const mapUser = (firebaseUser: FirebaseUser): User => ({
  uid: firebaseUser.uid,
  email: firebaseUser.email,
  displayName: firebaseUser.displayName,
  photoURL: firebaseUser.photoURL
});

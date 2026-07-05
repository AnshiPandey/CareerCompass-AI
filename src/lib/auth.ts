import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

const googleProvider = new GoogleAuthProvider();

/**
 * Sign in using Google Popup
 */
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    const userRef = doc(db, "users", user.uid);

    const existingUser = await getDoc(userRef);

    // Create user document only once
    if (!existingUser.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
      });
    }

    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
}

/**
 * Logout
 */
export async function logout() {
  await signOut(auth);
}

/**
 * Listen for auth state changes
 */
export function authStateListener(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}
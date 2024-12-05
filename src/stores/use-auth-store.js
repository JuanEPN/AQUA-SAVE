import { create } from "zustand";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../firebase.config";

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  loginGoogleWithPopUp: async () => {
    set({ loading: true, error: null });
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error(error);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  observeAuthState: () => {
    set({ loading: true });
    onAuthStateChanged(auth, (user) => {
      console.log("Estado de autenticación:", user);
      set({ user, loading: false });
    });
  },
}));

export const useAuthObserver = () => {
  const observeAuthState = useAuthStore((state) => state.observeAuthState);
  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);
};

export default useAuthStore;

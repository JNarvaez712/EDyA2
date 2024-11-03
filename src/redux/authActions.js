import { auth } from '../firebase/Config';
import { signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { loginStart, loginSuccess, loginFailure, logout } from './authSlice';

export const loginWithEmail = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(loginStart());
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(logout());
};
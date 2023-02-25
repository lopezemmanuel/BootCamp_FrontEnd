import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        const credentials = GoogleAuthProvider.credentialFromResult(result);
    } catch (error) {
        console.log(error)
    }
}
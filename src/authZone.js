import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


export function newAccount(mail, passwd) {
    createUserWithEmailAndPassword(auth, mail, passwd)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return {
                success: true,
                nowOn: user
            }
        })
        .catch((error) => {
            return {
                success: false,
                errorMsg: error.message
            }
        });
}


export function logIn(mail, passwd) {
    signInWithEmailAndPassword(auth, mail, passwd)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return {
                success: true,
                nowOn: user
            }
        })
        .catch((error) => {
            return {
                success: false,
                errorMsg: error.message
            }
        });
}

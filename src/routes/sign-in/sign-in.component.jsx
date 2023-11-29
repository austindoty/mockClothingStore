import { signInWithGooglePopup, createUserDoucmentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDoucmentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page </h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"

function Home() {
    const [user] = useAuthState(auth);
  return (
    <div>
        {user ? (
            <>
            <UserInfo />
            <SignoutButton />
            </>
            ):( 
            <SigninButton />
        )}
    </div>
  )
}

export default Home;

function SigninButton () {
    const signinWithGoogle = () => {
        signInWithPopup(auth, provider)
    }

    return (
        <button onClick={signinWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    )
}

function SignoutButton () {

    return (
        <button onClick={() => auth.signOut()}>
            <p>SignOut</p>
        </button>
    )
}

function UserInfo () {
    return (
        <>
            <img src={auth.currentUser?.photoURL ?? undefined} />
        </>
    )
}
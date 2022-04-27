import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="container text-center mt-5">
      <button onClick={handleSignIn} type="button" className="btn btn-warning">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;

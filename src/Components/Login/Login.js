import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/login`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.token);
        });
      navigate(from, { replace: true });
    }
  }, [navigate, from, user]);

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

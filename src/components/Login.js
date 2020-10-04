import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../App";

function Login() {
  const { idToken, signIn } = useContext(AuthContext);
  const { push } = useHistory();

  useEffect(() => {
    idToken && push("/");
  }, [idToken, push]);

  return (
    <button onClick={signIn} id="login">
      Login with Google
    </button>
  );
}

export default Login;

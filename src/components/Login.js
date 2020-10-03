import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../App";

function Login() {
  const { user, signIn } = useContext(AuthContext);
  const { push } = useHistory();

  useEffect(() => {
    user?.email && push("/");
  }, [user, push]);

  return (
    <button onClick={signIn} id="login">
      Login with Google
    </button>
  );
}

export default Login;

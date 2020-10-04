import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../App";

function Logout() {
  const { idToken, signOut } = useContext(AuthContext);
  const { push } = useHistory();

  useEffect(() => {
    signOut();
    !idToken && push("/");
  }, [idToken, push, signOut]);

  return <div>Logging out...</div>;
}

export default Logout;

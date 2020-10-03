import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../App";

function Logout(props) {
  const { user, signOut } = useContext(AuthContext);
  const { push } = useHistory();

  useEffect(() => {
    signOut();
    !user?.email && push("/");
  }, [user, push, signOut]);

  return <div>Logging out...</div>;
}

export default Logout;

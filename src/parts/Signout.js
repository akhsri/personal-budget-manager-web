import React from "react";
import { useHistory } from "react-router-dom";

const Signout = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };
  return (
    <div>
      <button
        type="button"
        color="primary"
        class="btn btn-primary btn-large btn-block"
        onClick={handleLogout}
        style={{ backgroundColor: "#3f51b5", color: "white", width: "180%", marginTop: "50%" }}
      >
        Signout
      </button>
    </div>
  );
};

export default Signout;

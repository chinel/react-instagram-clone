import React from "react";

function Header({ user }) {
  return (
    <div>
      Welcome, {user}!<button>Logout</button>
    </div>
  );
}

export default Header;

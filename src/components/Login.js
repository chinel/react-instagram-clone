import React from "react";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form method="post">
        <input type="text" placeholder="Input username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;

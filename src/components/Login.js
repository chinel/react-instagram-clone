import React from "react";

function Login() {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h2>Login</h2>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;

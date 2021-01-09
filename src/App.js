import React from "react";
import Login from "./components/Login";
function App() {
  const [user, setUser] = React.useState("");

  if (!user) {
    return <Login />;
  }

  return <div>app</div>;
}

export default App;

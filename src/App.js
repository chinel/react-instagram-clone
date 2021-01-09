import React from "react";
import { Header, Login } from "./components";

function App() {
  const [user, setUser] = React.useState("");

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} />
    </>
  );
}

export default App;

import React from "react";
import { Header, Login } from "./components";

function App() {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
    </>
  );
}

export default App;

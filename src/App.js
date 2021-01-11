import React from "react";
import { Header, Login, CreatePost, PostList } from "./components";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  const handleAddPost = React.useCallback(
    (newPost) => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <UserContext.Provider value={user}>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
    </UserContext.Provider>
  );
}

export default App;

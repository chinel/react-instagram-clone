import React from "react";
import { Header, Login, CreatePost, PostList } from "./components";

const functionCount = new Set();

function App() {
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  const handleAddPost = React.useCallback(
    (newPost) => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );

  functionCount.add(handleAddPost);
  console.log(functionCount);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        {" "}
        {count}
      </button>
    </>
  );
}

export default App;

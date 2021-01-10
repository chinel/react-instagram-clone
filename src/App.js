import React from "react";
import { Header, Login, CreatePost } from "./components";

function App() {
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} post={posts} />
      {posts.map((post, id) => {
        return (
          <React.Fragment key={id}>
            {post.image && (
              <img
                style={{ height: 100, width: 200, objectFit: "cover" }}
                alt={post.content}
                src={URL.createObjectURL(post.image)}
              />
            )}
            <p>{post.content}</p>
            <div>{post.user}</div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default App;

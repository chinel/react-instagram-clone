import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  return posts.map((post, id) => <Post post={post} id={id} />);
}

export default PostList;

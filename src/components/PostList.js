import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  return posts.map((post, id) => <Post {...post} key={id} />);
}

export default PostList;

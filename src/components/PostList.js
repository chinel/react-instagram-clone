import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  return posts.map((post, id) => <Post {...post} key={post.id}/>);
}

export default PostList;

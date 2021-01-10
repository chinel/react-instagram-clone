import React from "react";

function Post({ post, id }) {
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
}

export default Post;

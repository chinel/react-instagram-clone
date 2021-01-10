import React from "react";

function Post({ image, content, user }) {
  return (
    <React.Fragment>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          alt={content}
          src={URL.createObjectURL(image)}
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
    </React.Fragment>
  );
}

export default Post;

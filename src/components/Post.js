import React from "react";
import { UserContext } from "../App";

function Post({ image, content, user }) {
  const currentUser = React.useContext(UserContext);
  return (
    <>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          alt={content}
          src={URL.createObjectURL(image)}
        />
      )}
      <p>{content}</p>
      <div style={{ color: currentUser === user && "green" }}>{user}</div>
    </>
  );
}

export default Post;

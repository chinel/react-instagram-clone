import React from "react";
import { UserContext, PostContext } from "../App";

function Post({ image, content, user, id }) {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);

  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }

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
      <div style={{ color: currentUser === user && "green" }}>
        {user}{" "}
        {currentUser === user && (
          <button onClick={handleDeletePost}>Delete</button>
        )}
      </div>
    </>
  );
}

export default Post;

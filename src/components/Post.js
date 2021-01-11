import React from "react";

function Post({ image, content, user }) {
  return (
    <UserContext.Consumer>
      {(currentUser) => (
        <>
          {image && (
            <img
              style={{ height: 100, width: 200, objectFit: "cover" }}
              alt={content}
              src={URL.createObjectURL(image)}
            />
          )}
          <p>{content}</p>
          <div>{user}</div>
        </>
      )}
    </UserContext.Consumer>
  );
}

export default Post;

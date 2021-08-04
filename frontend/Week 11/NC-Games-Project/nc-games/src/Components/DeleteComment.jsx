import React, { useEffect, useContext } from "react";
import { deleteComment } from "../Utils/api";
import { LogonContext } from "../Contexts/Logon";

const DeleteComment = ({ review_id, review_body }) => {
  const { logon, setLogon } = useContext(LogonContext);
  const removeComment = () => {
    deleteComment(review_id, review_body).then(() => {});
  };

  return (
    <div>
      <button disabled={!logon} onClick={removeComment}>Delete Comment</button>
    </div>
  );
};

export default DeleteComment;

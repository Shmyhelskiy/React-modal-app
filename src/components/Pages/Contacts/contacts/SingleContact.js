import React from "react";
import { useParams } from "react-router-dom";

const SingleContact = () => {
  let { userId } = useParams();
  return (
    <div>
      <p>It's singlePage: {userId}</p>
    </div>
  );
};

export default SingleContact;

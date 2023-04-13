import React from "react";
import "./Posts.scss";
import data from "../../data";
import Post from "../Post/Post";

const Posts = () => {
  return (
    <div className="posts">
      {data.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Posts;

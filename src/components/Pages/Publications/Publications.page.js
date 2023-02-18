import React from "react";
import Post from "./post/Post";
import styles from "./Publications.module.css";
import * as img from "./post/image/post-image";

const postData = [
  {
    author: {
      name: "Anakin skywalker",
      photo: img.ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: img.RAY_IMAGE,
    date: "26 лют.",
  },
  {
    author: {
      name: "Han Solo",
      photo: img.HAN_SOLO,
      nickname: "@Han_solo",
    },
    content: "Tours of the galaxy, on the Millennium Falcon",
    image: img.Millenium_Falcon,
    date: "29 лют.",
  },
];
postData.forEach((item, index) => (item.id = index + 1));

const PublicationsPage = () => {
  return (
    <div className={styles["wrapper"]}>
      {postData.map((item) => (
        <Post postData={item} key={item.id} />
      ))}
    </div>
  );
};

export default PublicationsPage;

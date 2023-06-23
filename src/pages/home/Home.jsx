import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const Home = () => {
  return (
    <>
      <div className={style.inner__block}>
        Home
        <div className={style.inner__block_first}>
          <Link to="photo-gallery">Link #1</Link>
        </div>
        <div className={style.inner__block_second}>
          <Link to="task">Link #2</Link>
        </div>
        <div className={style.inner__block_third}>
          <Link to="post">Link #3</Link>
        </div>
        <div className={style.inner__block_comeback}>
          <Link to="block">Go to back</Link>
        </div>
      </div>
    </>
  );
};

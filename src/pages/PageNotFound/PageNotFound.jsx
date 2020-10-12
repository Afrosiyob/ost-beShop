import React, { useEffect } from "react";
import "./PageNotFound.scss";

import $ from "jquery";

import ImgNumber from "../../assets/404page/404.svg";

function PageNotFound() {
  useEffect(() => {
    $(".not-found-page").mousemove(function (e) {
      console.log("====================================");
      console.log("x = " + e.offsetX + " :::: y = " + e.offsetY);
      console.log("====================================");
      console.log("====================================");
      console.log(
        "widht = " +
          e.target.offsetWidth +
          " :::: heigth = " +
          e.target.offsetHeight
      );
      console.log("====================================");

      $(".img-number").css({
        left:
          e.offsetX > e.target.offsetWidth
            ? 50 + e.offsetX / 300 + "%"
            : 50 - e.offsetX / 300 + "%",
        top:
          e.offsetY > e.target.offsetHeight
            ? 50 + e.offsetY / 100 + "%"
            : 50 - e.offsetY / 100 + "%",
      });
    });
  }, []);

  return (
    <div className="not-found-page">
      <div className="images-wrap-box">
        <img src={ImgNumber} className="img-number" alt="number" />
      </div>
    </div>
  );
}

export default PageNotFound;

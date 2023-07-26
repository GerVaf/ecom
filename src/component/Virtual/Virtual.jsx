import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import Before from "../../assets/before.png"
import After from "../../assets/after.png"

import ReactCompareImage from "react-compare-image";

const Virtual = () => {
  return (
    <>
      <div className={css.virtual}>
        {/* left side */}
        <div className={css.left}>
          <span>virtual try-on</span>
          <p>Never Buy the wrong shade again</p>
          <div>Try now!</div>
          <img src={Shade} alt="" />
        </div>
        {/* rigth side */}
        <div className={css.right}>
          <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before} rightImage={After} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Virtual;

import React from "react";
import preloader from "../../../assets/image/preloader.gif";

let Preloader = () => {
  return (
    <div>
      <img
        src={preloader}
        alt="preloader "
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};
export default Preloader;

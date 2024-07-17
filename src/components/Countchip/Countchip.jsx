import React from "react";
import "./countchip.scss";

const Countchip = ({ count, open }) => {
  return (
    <div className={`countchip-wrapper-${open ? "open" : "closed"}`}>
      <p className="label1regular color-black-10">{count}</p>
    </div>
  );
};

export default Countchip;

import React from "react";

export default function NonActiveMatrix(props) {
  return (
    <div className="binary card matrix-style">
      <a href="#a" className="binary-root matrix-root__nonactive ">
        <i
          className="matrix-icon_cart matrix-icon_cart__big "
          data-matrix={2}
          data-level={4}
          data-matrix_price="0.2"
          onclick="return false"
          title="Buy"
        />
        <span className="matrix-level matrix-level__nonactive ">{props.matrixNumber}</span>
        <span className="matrix-price">{props.matrixPrice} </span>
      </a>
      <div className="binary-children binary-children_level__1">
        <div className="matrix-children__nonactive "></div>
        <div className="matrix-children__nonactive "></div>
      </div>
      <div className="binary-children binary-children_level__2">
        <div className="matrix-children__nonactive "></div>
        <div className="matrix-children__nonactive "></div>
        <div className="matrix-children__nonactive "></div>
        <div className="matrix-children__nonactive "></div>
      </div>
      <div className="binary-branchs">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="matrix-break" />
      <div className="matrix-info"></div>
    </div>
  );
}

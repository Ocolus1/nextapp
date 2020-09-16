import React from 'react'

export default function NonActiveMatrix3x(props) {
    return (
        <div className="ternary matrix-style-3x card">
        <a
          href="/page/x3/5/51/"
          className="ternary-root matrix-root__nonactive "
        >
          <i
            className="matrix-icon_cart matrix-icon_cart__big "
            data-matrix={1}
            data-level={5}
            data-matrix_price="0.4"
            onclick="return false"
            title="Buy"
          />
          <span className="matrix-level matrix-level__nonactive ">
          {props.matrixNumber}
          </span>
          <span className="matrix-price">{props.matrixPrice}  </span>
        </a>
        <div className="ternary-children">
          <div className="matrix-children__nonactive "></div>
          <div className="matrix-children__nonactive "></div>
          <div className="matrix-children__nonactive "></div>
        </div>
        <div className="ternary-branchs">
          <div />
          <div />
          <div />
        </div>
        <div className="matrix-break" />
        <div className="matrix-info"></div>
      </div>
      
    )
}

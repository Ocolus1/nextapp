import React from "react";
import Link from "next/link";
import { FaUserFriends, FaSync } from "react-icons/fa";
import config from "../../config";

export default function ActiveMatrix3x(props) {
    return (
        <div className="ternary matrix-style-3x card">
          
        <a
          href={config.routes.matrixView3x}
          className="ternary-root matrix-root__active "
        >
          <span className="matrix-level matrix-level__active ">
          {props.matrixNumber}
          </span>
          <span className="matrix-price">{props.matrixPrice} </span>
        </a>
        <div className="ternary-children">
          <div className="matrix-children__active ">
          <Link href={config.routes.matrixView3x} title={props.userId}>
            &nbsp;
          </Link>
          </div>
          <div className="matrix-children__nonactive "></div>
          <div className="matrix-children__nonactive "></div>
        </div>
        <div className="ternary-branchs">
          <div />
          <div />
          <div />
        </div>
        <div className="matrix-break" />
        <div className="matrix-info">
        <div className="matrix_partners__count">
          <span className="text-white pr-1">{props.partners.length}</span>
          <FaUserFriends className="users-icon" />
        </div>
        <div className="matrix_reinvest">
          <span className="text-white">{props.totalReinvest} </span>
          <FaSync className="sync-icon" />
        </div>
      </div>
        <div className="matrix-break" />
      </div>
      
    )
}

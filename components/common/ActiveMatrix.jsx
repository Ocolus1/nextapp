/* eslint-disable no-unused-expressions */
import React from "react";
import Link from "next/link";
import { FaUserFriends, FaSync } from "react-icons/fa";
import config from "../../config";

export default function ActiveMatrix(props) {
  return (
    <div className="binary card matrix-style">
      <Link
        href={config.routes.matrixView}
        className="binary-root matrix-root__active "
      >
        <a className={'className="binary-root matrix-root__active '}> 
        <span className="matrix-level matrix-level__active ">
          {props.matrixNumber}
        </span>
        <span className="matrix-price">{props.matrixPrice} </span>
        </a>
      </Link>
      <div className="binary-children binary-children_level__1">
        <div className="matrix-children__overflow ">
          <Link href={config.routes.matrixView} title={props.userId}>
            &nbsp;
          </Link>
        </div>
        <div className="matrix-children__active ">
          <Link href={config.routes.matrixView} title={props.userId}>
            &nbsp;
          </Link>
        </div>
      </div>
      <div className="binary-children binary-children_level__2">
        {props.partners.map((p) => {
          return p.status === "overflow" ? (
            <div className="matrix-children__overflow_partner ">
              <Link href={config.routes.matrixView} title="UID: 32">
                &nbsp;
              </Link>
            </div>
          ) : (
            (p.status = "active" ? (
              <div className="matrix-children__active ">
                <Link href={config.routes.matrixView} title="UID: 32">
                  &nbsp;
                </Link>
              </div>
            ) : (
              <></>
            ))
          );
        })}
        {4 - props.partners.length > 0 &&
          Array(4 - props.partners.length)
            .fill()
            .map((e) => {
              return <div className="matrix-children__nonactive " />;
            })}
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
  );
}

import React from 'react'
import { FaArrowAltCircleUp, FaUserFriends, FaSync } from "react-icons/fa";

export default function L1MatrixActiveChild() {
    return (
        <div>
            <div
              className="user-matrix_wrapper_popup matrix-children__active "
              title
            >
              <span className="user-matrix_children_count">
                <a
                 href="#a"className="fsz-15"
                >
                  23{" "}
                </a>
              </span>
              <span className="user-matrix_popup">
                <span>
                  {/* <i className="matrix-icon_users" /> */}
                  <FaUserFriends className="users-icon"/>
                  <span>1</span>
                </span>
                <span>
                  {/* <i className="matrix-icon_sync" /> */}
                  <FaSync className="sync-icon"/>
                  <span>0</span>
                </span>
              </span>
              <span className="matrix-icon_upline-profit">
              <FaArrowAltCircleUp/>

                {/* <img
                  src="/img/upline-profit.svg"
                  alt
                  title="PAYOUT TO HIGHER PARTNER"
                /> */}
              </span>
            </div>
        </div>
    )
}

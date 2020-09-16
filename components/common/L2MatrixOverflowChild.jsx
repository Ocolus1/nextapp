import React from 'react'
import { FaUserFriends, FaSync, } from "react-icons/fa";

export default function L2MatrixOverflowChild() {
    return (
        <div>
            <div
              className="user-matrix_wrapper_popup matrix-children__overflow_partner "
              title
            >
              <span className="user-matrix_children_count">
                <a
                  href="#a"
                  className="fsz-15"
                >
                  51{" "}
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
            </div>
        </div>
    )
}

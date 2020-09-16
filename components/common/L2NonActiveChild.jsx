import React from 'react'
import { FaSync, FaUserFriends } from 'react-icons/fa'

export default function L2NonActiveChild() {
    return (
        <React.Fragment>
            <div
              className="user-matrix_wrapper_popup matrix-children__nonactive "
              title
            >
              <span className="user-matrix_children_count"></span>
              <span className="user-matrix_popup">
                <span>
                  {/* <i className="matrix-icon_users" /> */}
                  <FaUserFriends className="users-icon"/>
                  <span>0</span>
                </span>
                <span>
                  {/* <i className="matrix-icon_sync" /> */}
                  <FaSync  className="sync-icon"/>
                  <span>0</span>
                </span>
              </span>
            </div>
        </React.Fragment>
    )
}

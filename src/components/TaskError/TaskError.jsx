import React from "react";

import "./TaskError.scss";

class TaskError extends React.Component {
  render() {
    return (
      <div id="errors">
        <span className="error_name" id="error_name">
          name
        </span>
        <span className="error_email" id="error_email">
          email
        </span>
        <span className="error_password" id="error_password">
          passord
        </span>
      </div>
    );
  }
}

export default TaskError;

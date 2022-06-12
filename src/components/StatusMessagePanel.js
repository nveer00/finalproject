import React from "react";
import PropTypes from 'prop-types'; 

const StatusMessagePanel = ({ status }) => {
  return (
     <div className="error-message" position="absolute">
          <span className="error-text">{status}</span>
     </div>
  );
};

StatusMessagePanel.propTypes = {
  status: PropTypes.string
};

export default StatusMessagePanel;

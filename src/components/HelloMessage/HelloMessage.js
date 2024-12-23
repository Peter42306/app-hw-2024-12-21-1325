import React from 'react';
import PropTypes from 'prop-types';
import './HelloMessage.css';

const HelloMessage = ({name = "World"}) => (
  <div className="HelloMessage">
    Hello, {name}!
  </div>
);

// HelloMessage.propTypes = {
//   name: PropTypes.string,
// };

// HelloMessage.defaultProps = {
//   name: "World",
// };

export default HelloMessage;

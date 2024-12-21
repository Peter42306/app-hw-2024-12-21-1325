import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';




function Avatar (props) 
{
  return (
    <div className="avatar__container">
      <div className="avatar__header">
        <img src={props.photo} className="avatar__image" alt="user avatar"></img>
        {/* <img src={logo} className="avatar__image" alt="user avatar" /> */}
        <p>{props.name}</p>
      </div>
      <div className="avatar__main">
        <p>{props.position ? props.position : 'not set'}</p>
      </div>
      <div className="avatar__footer">
        <p>Twitter: {props.twitter}</p>
        <p>Facebook: {props.facebook}</p>
      </div>
    </div>
  );
}

// const Avatar = () => (
//   <div className="Avatar">
//     Avatar Component
//   </div>
// );

// Avatar.propTypes = {};

// Avatar.defaultProps = {};

export default Avatar;

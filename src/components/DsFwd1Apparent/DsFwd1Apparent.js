import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DsFwd1Apparent.css';
import { Col, Form } from 'react-bootstrap';

const DsFwd1Apparent = ({ draughtDetailsPs, draughtDetailsSs, onReturnFwdApparentPs, onReturnFwdApparentSs }) => {
  const [fwdApparentPs, setFwdApparentPs] = useState('');
  const [fwdApparentSs, setFwdApparentSs] = useState('');
  

  const handleFwdApparentPs = (event) => {    
    const value = parseFloat(event.target.value);
    setFwdApparentPs(isNaN(value) ? '' : value);
    onReturnFwdApparentPs(isNaN(value) ? '' : value);
  };
  const handleFwdApparentSs = (event) => {
    const value = parseFloat(event.target.value);
    setFwdApparentSs(isNaN(value) ? '' : value);
    onReturnFwdApparentSs(isNaN(value) ? '' : value)
  };
    
  return(
    <Form>
      <Col>
        <Form.Group controlId='fwdApparentPs'>
          <Form.Label>{draughtDetailsPs}</Form.Label>
          <Form.Control 
            type='number' 
            value={fwdApparentPs} 
            onChange={handleFwdApparentPs}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId='fwdApparentSs'>
          <Form.Label>{draughtDetailsSs}</Form.Label>
          <Form.Control 
            type='number' 
            value={fwdApparentSs} 
            onChange={handleFwdApparentSs}
          />
        </Form.Group>
      </Col>      
    </Form>    
  );
};

DsFwd1Apparent.propTypes = {
  draughtDetailsPs: PropTypes.string.isRequired,
  draughtDetailsSs: PropTypes.string.isRequired,
  onReturnFwdApparentPs: PropTypes.func.isRequired,
  onReturnFwdApparentSs: PropTypes.func.isRequired,
};

DsFwd1Apparent.defaultProps = {};

export default DsFwd1Apparent;

import React from 'react';
import PropTypes from 'prop-types';
import './DsFwd2Mean.css';
import { Form } from 'react-bootstrap';

const DsFwd2Mean = ({ draughtMeanPosition, apparentPs, apparentSs, onApparentMean }) => {
  // Рассчитываем среднее значение
  const fwdApparentMean = 
    apparentPs !== null && apparentSs !== null
      ? (parseFloat(apparentPs) + parseFloat(apparentSs)) / 2
      : null;

  const roundMean = 
    fwdApparentMean !==null
    ? fwdApparentMean.toFixed(3)
    : null;

  // Возвращаем среднее значение через колбэк
  if(roundMean !== null && onApparentMean) {
    onApparentMean(roundMean);
  }

  return(
    <Form>
      <Form.Group controlId='fwdApparentMean'>
        <Form.Label>{draughtMeanPosition}</Form.Label>
        <Form.Control
          type='text'
          value={roundMean !== null ? roundMean : ''}
          readOnly          

        />

      </Form.Group>      
    </Form>
  );
};

DsFwd2Mean.propTypes = {
  draughtMeanPosition:PropTypes.string.isRequired,
  apparentPs: PropTypes.number.isRequired,
  apparentSs: PropTypes.number.isRequired,
  onApparentMean: PropTypes.func,
};

DsFwd2Mean.defaultProps = {
  onApparentMean: null
};

export default DsFwd2Mean;

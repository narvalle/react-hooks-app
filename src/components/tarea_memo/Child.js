import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Child = ({ factor, onIncrement }) => {
  console.log(' Generated Child ');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => {
        onIncrement(factor);
      }}>
      {factor}
    </button>
  );
};

Child.propTypes = {
  factor: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default React.memo(Child);

import React from 'react';
import PropTypes from 'prop-types';

function Counter(props) {

  return (
    <span className='btn-group btn-group-sm pl-2'>
        <button className='btn btn-secondary'>-</button>
        <span className='btn btn-outline-primary'>1</span>
        <button className='btn btn-secondary'>+</button>
    </span>
  )
}

Counter.propTypes = {
    props: PropTypes.any,
}

export default Counter

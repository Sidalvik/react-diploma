import React from 'react';
import PropTypes from 'prop-types';
import {useSelector , useDispatch} from 'react-redux';
import {changeProductCount} from '../../../store/actions/actionCreators';

function Counter(props) {
  const stateProduct = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const changeCounter = (step) => {
    dispatch(changeProductCount(step));
  }

  const handleInc = () => changeCounter(1);
  const handleDec = () => changeCounter(-1);

  return (
    <span className='btn-group btn-group-sm pl-2'>
        <button className='btn btn-secondary' onClick={handleDec}>-</button>
        <span className='btn btn-outline-primary'>{stateProduct.count}</span>
        <button className='btn btn-secondary' onClick={handleInc}>+</button>
    </span>
  )
}

Counter.propTypes = {
    props: PropTypes.any,
}

export default Counter

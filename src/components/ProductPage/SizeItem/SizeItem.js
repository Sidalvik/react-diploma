import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeProductActiveSize} from '../../../store/actions/actionCreators';

function SizeItem(props) {
  const {size} = props;

  const {activeSize} = useSelector((state) => state.product);
  const dispatch = useDispatch();

    const handleCheckSize = () => {
      if (activeSize !== size) {
        dispatch(changeProductActiveSize(size));
      }

    }

    if (!size) return <><span>Нет</span></>
    
  return (
    <>
        {' '}<span className={'catalog-item-size' + (activeSize === size ? ' selected' : '')} onClick={handleCheckSize}>{size}</span>{' '}
    </>
  )
}

SizeItem.propTypes = {
    size: PropTypes.string.isRequired,
}

export default SizeItem

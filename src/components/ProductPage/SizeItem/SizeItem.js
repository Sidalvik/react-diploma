import React from 'react';
import PropTypes from 'prop-types';

function SizeItem(props) {
    const {size, selected} = props;

    if (!size) return <><span>Нет</span></>
    
  return (
    <>
        {' '}<span className={'catalog-item-size' + (selected ? ' selected' : '')}>{size}</span>{' '}
    </>
  )
}

SizeItem.propTypes = {
    size: PropTypes.string.isRequired,
}

export default SizeItem

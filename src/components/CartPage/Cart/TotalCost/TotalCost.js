import React from 'react';
import PropTypes from 'prop-types';

function TotalCost(props) {
    const {totalCost, currency} = props;
    
    if (totalCost !==0 && !+totalCost) return <></>;

  return (
    <tr>
        <td colSpan='5' className='text-right'>Общая стоимость</td>
        <td>{`${Number(totalCost).toLocaleString()} ${currency}`}</td>
    </tr>
  )
}

TotalCost.defaultProps = {
    currency: 'руб.',
}

TotalCost.propTypes = {
    totalCost: PropTypes.number,
    currency: PropTypes.string,
}

export default TotalCost

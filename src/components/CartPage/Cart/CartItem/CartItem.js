import React from 'react';
import PropTypes from 'prop-types';
import {PRODUCT_PAGE as linkToProduct} from '../../../../config/links';

function CartItem(props) {
    const {rowNumber, title, id, size, count, price, currency} = props; 
  return (
    <tr>
        <th scope='row'>{rowNumber}</th>
        <td><a href={linkToProduct(id)}>{title}</a></td>
        <td>{size}</td>
        <td>{count}</td>
        <td>{`${Number(price).toLocaleString()} ${currency}`}</td>
        <td>{`${Number(count * price).toLocaleString()} ${currency}`}</td>
        <td><button className='btn btn-outline-danger btn-sm'>Удалить</button></td>
    </tr>
  )
}

CartItem.defaultProps = {
    currency: 'руб.',
}

CartItem.propTypes = {
    rowNumber: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

export default CartItem

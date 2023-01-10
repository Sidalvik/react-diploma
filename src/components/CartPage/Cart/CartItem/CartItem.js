import React from 'react';
import PropTypes from 'prop-types';
import {PRODUCT_PAGE as linkToProduct} from '../../../../config/links';
import { useDispatch } from 'react-redux';
import {removeCartItem} from '../../../../store/actions/actionCreators';

function CartItem(props) {
    const {rowNumber, title, id, size, count, price, currency} = props; 

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
      dispatch(removeCartItem({id, size}));
    }

  return (
    <tr>
        <th scope='row'>{rowNumber}</th>
        <td><a href={linkToProduct(id)}>{title}</a></td>
        <td>{size}</td>
        <td>{count}</td>
        <td>{`${Number(price).toLocaleString()} ${currency}`}</td>
        <td>{`${Number(count * price).toLocaleString()} ${currency}`}</td>
        <td><button className='btn btn-outline-danger btn-sm' onClick={handleRemoveItem}>Удалить</button></td>
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

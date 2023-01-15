import React from 'react';
import PropTypes from 'prop-types';
import ModalSuccess from '../ModalSuccess/ModalSuccess';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import {changeOrderField, postOrder} from '../../../store/actions/actionCreators';


function OrderForm(props) {
    const {cartItems: items} = useSelector((state) => state.cart);
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    const checkFull = items.length > 0 && order.phone.length > 5 && order.address.length > 0 && order.agree;

    const styleCard = {
        maxWidth: '30rem', 
        margin: '0 auto',
    };

    const handleChange = (event) => {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        if (event.target.name === 'phone') {
            const regExp = /^\+?\d{0,11}/gi;    
            value = value.match(regExp).join() || '';
        }
        dispatch(changeOrderField(event.target.name, value));
    }

    const handleSendOrder = (event) => {
        event.preventDefault();
        const orderBody = JSON.stringify({
            owner: {
            phone: order.phone,
            address: order.address,
            },
            items
        },['address', 'phone', 'owner', 'items', 'id', 'price', 'count']);

        postOrder(dispatch, orderBody);
    }

  return (
    <section className='order'>
        <h2 className='text-center'>Оформить заказ</h2>
        <div className='card' style={styleCard}>
            <form className='card-body' onSubmit={handleSendOrder}>
                <div className='form-group'>
                    <label htmlFor='phone'>Телефон</label>
                    <input className='form-control' id='phone' name='phone' placeholder='Ваш телефон' onChange={handleChange} value={order['phone']}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Адрес доставки</label>
                    <input className='form-control' id='address' name='address' placeholder='Адрес доставки' onChange={handleChange} value={order['address']}/>
                </div>
                <div className='form-group form-check'>
                    <input type='checkbox' className='form-check-input' id='agreement' name='agree' checked={order['agree']} onChange={handleChange}/>
                    <label className='form-check-label' htmlFor='agreement'>Согласен с правилами доставки</label>
                </div>
                <button type='submit' className='btn btn-outline-secondary' disabled={!checkFull || order.loading}>Оформить</button>
            </form>
        </div>
        {order.error && <ErrorMessage errorText={order.error?.message}/>}
        {order.successOrder && <ModalSuccess/>}
    </section>
  )
}

OrderForm.propTypes = {
    props: PropTypes.any,
}

export default OrderForm

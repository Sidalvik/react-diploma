import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem/CartItem';
import TotalCost from './TotalCost/TotalCost';
import { useSelector } from 'react-redux';


function Cart(props) {
    const currency = 'руб.';
    const {cartItems: items} = useSelector((state) => state.cart);


    const headings = ['#', 'Название', 'Размер', 'Кол-во', 'Стоимость', 'Итого', 'Действия'];
    const header = <tr>{
        headings.map((title, index) => <th key={index} scope='col'>{title}</th>)
        }</tr>;
    

    let rowNumber = 1;
    const tBody = items.map((item, index) => <CartItem key={index} {...item} rowNumber={rowNumber++}/>);
    const totalCost = items.reduce((total, item) => total + item.count * item.price, 0);

  return (
    <section className='cart'>
        <h2 className='text-center'>Корзина</h2>
        <table className='table table-bordered'>
            <thead>{header}</thead>
            <tbody>
                {tBody}
                <TotalCost totalCost={totalCost} currency={currency}/>
            </tbody>
        </table>
    </section>
  )
}

Cart.propTypes = {
    props: PropTypes.any,
}

export default Cart

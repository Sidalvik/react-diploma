import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem/CartItem';
import TotalCost from './TotalCost/TotalCost';

function Cart(props) {
    const currency = 'руб.';

    const headings = ['#', 'Название', 'Размер', 'Кол-во', 'Стоимость', 'Итого', 'Действия'];
    const header = <tr>{
        headings.map((title, index) => <th key={index} scope='col'>{title}</th>)
        }</tr>;
    
    const items =[
        {rowNumber: 1, title: "Босоножки 'MYER'", id: 1, size: '18 US', count: 1, price: 4000,},
        {rowNumber: 1, title: "Босоножки 'MYER'", id: 3, size: '18 US', count: 1, price: 1000,},
        {rowNumber: 1, title: "Босоножки 'MYER'", id: 4, size: '18 US', count: 3, price: 1000,},
    ];

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

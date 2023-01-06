import React from 'react';
import PropTypes from 'prop-types';

function CatalogItemCard(props) {
  const {className} = props;
  const { id, src, name, cost } = {id: 1, src: './img/products/sandals_myer.jpg', name: 'Босоножки "MYER"', cost: '34 000 руб.'}
  return (
    <div className={'card ' + (className ? className : '')}>
        <img src={src} className='card-img-top img-fluid' alt={name}/>
        <div className='card-body'>
            <p className='card-text'>{name}</p>
            <p className='card-text'>{cost}</p>
            <a href={`/products/${id}.html`} className='btn btn-outline-primary'>Заказать</a>
        </div>
    </div>
  )
}

CatalogItemCard.defaultProps = {
  className: 'catalog-item-card',
}

CatalogItemCard.propTypes = {
    props: PropTypes.any,
}

export default CatalogItemCard

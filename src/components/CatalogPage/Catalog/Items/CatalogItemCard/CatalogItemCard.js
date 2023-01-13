import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {PRODUCT_PAGE as linkToProduct} from '../../../../../config/links';

function CatalogItemCard(props) {
  const {className, item} = props;
  const { id, images, title, price } = item;

  return (
    <div className={`card ${(className ? className : '')}`}>
        <img src={images[0]} className='card-img-top img-fluid' alt={title}/>
        <div className='card-body'>
            <p className='card-text'>{title}</p>
            <p className='card-text'>{price}</p>
            <Link to={linkToProduct(id)} className='btn btn-outline-primary'>Заказать</Link>
        </div>
    </div>
  )
}

CatalogItemCard.defaultProps = {
  className: 'catalog-item-card',
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
}

CatalogItemCard.propTypes = {
    props: PropTypes.any,
}

export default CatalogItemCard

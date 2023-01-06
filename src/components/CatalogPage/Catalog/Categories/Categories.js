import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';
import CategoriesItem from './CategoriesItem/CategoriesItem';

function Categories(props) {
  return (
    <ul className='catalog-categories nav justify-content-center'>
        <CategoriesItem>
            <a className='nav-link active' href='/#'>Все</a>
        </CategoriesItem>
        <CategoriesItem>
            <a className='nav-link' href='/#'>Женская обувь</a>
        </CategoriesItem>
        <CategoriesItem>
            <a className='nav-link' href='/#'>Мужская обувь</a>
        </CategoriesItem>
        <CategoriesItem>
            <a className='nav-link' href='/#'>Обувь унисекс</a>
        </CategoriesItem>
        <CategoriesItem>
            <a className='nav-link' href='/#'>Детская обувь</a>
        </CategoriesItem>
    </ul>
  )
}

Categories.propTypes = {
    props: PropTypes.any,
}

export default Categories

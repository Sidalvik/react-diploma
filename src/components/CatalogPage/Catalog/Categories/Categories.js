import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import ErrorMessage from '../../../ErrorMessage/ErrorMessage';
import Preloader from '../../../Preloader/Preloader';
import { useSelector } from 'react-redux';

function Categories(props) {
    const categories = useSelector((state) => state.categories);

    const categoriesList = categories.list.map((item) => <CategoriesItem key={item.id} item={item}/>);

    if (categories.error) {
        return <ErrorMessage errorText={categories.error}/>
    };

    if (categories.loading) {
        return <Preloader/>
    };

  return (
    <ul className='catalog-categories nav justify-content-center'>
        {categoriesList}
    </ul>
  )
}

Categories.propTypes = {
    props: PropTypes.any,
}

export default Categories

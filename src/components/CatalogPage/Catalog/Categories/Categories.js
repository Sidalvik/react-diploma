import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Categories.css';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import ErrorMessage from '../../../ErrorMessage/ErrorMessage';
import Preloader from '../../../Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../../store/actions/actionCreatorsCategories';

function Categories(props) {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect((() => {
        fetchCategories(dispatch);
    }), [dispatch])

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

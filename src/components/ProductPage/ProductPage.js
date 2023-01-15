import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SizeItem from './SizeItem/SizeItem';
import Counter from './Counter/Counter';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Page404 from '../Page404/Page404';
import {useSelector, useDispatch} from 'react-redux';
import {addCartItem, fetchProduct} from '../../store/actions/actionCreators';
import { useParams } from 'react-router-dom';

function ProductPage(props) {
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        const controller = new AbortController();
        fetchProduct(dispatch, controller, id);
        return (() => controller.abort());
    },[dispatch, id])
    
    const product = useSelector((state) => state.product);
    const handleAddCartItem = () => {
        const cartItem = {
            ...product.item,
            size: product.activeSize,
            count: product.count,
        }

        dispatch(addCartItem(cartItem));
    }

    const {item} = product;
    
    if (product?.loading) {
        return <section className='catalog-item'><Preloader/></section>              
    }
    
    if (product?.error) {
        return (
            <section className='catalog-item'>
                {product.error?.status === 404 ? <Page404/> :
                <ErrorMessage errorText={product.error?.message}/>}
            </section>            
        )
    }

    if (!product?.item?.id) {
        return <Page404/>
    }

    const avalibleSize = item?.sizes?.filter((size) => size.avalible).map((size) => size.size);
    const sizesList = avalibleSize.map((size) => <SizeItem key={size} size={size} />);



  return (
    <section className='catalog-item'>
        <h2 className='text-center'>{item.title}</h2>
        <div className='row'>
            <div className='col-5'>
                <img src={item.images[0]}
                    className='img-fluid' alt={item.title}/>
            </div>
            <div className='col-7'>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <td>Артикул</td>
                            <td>{item.sku}</td>
                        </tr>
                        <tr>
                            <td>Производитель</td>
                            <td>{item.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Цвет</td>
                            <td>{item.color}</td>
                        </tr>
                        <tr>
                            <td>Материалы</td>
                            <td>{item.material}</td>
                        </tr>
                        <tr>
                            <td>Сезон</td>
                            <td>{item.season}</td>
                        </tr>
                        <tr>
                            <td>Повод</td>
                            <td>{item.reason}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center'>
                    <p>Размеры в наличии: {sizesList.length > 0 ? sizesList : <span>Отсутствуют</span>}</p>
                    {sizesList.length > 0 && <p>Количество: <Counter /></p>}
                </div>
                {sizesList.length > 0 && <button className='btn btn-danger btn-block btn-lg' onClick={handleAddCartItem} disabled={!product.activeSize}>В корзину</button>}
            </div>
        </div>
    </section>
  )
}

ProductPage.propTypes = {
    props: PropTypes.any,
}

export default ProductPage

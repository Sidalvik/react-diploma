import React from 'react';
import PropTypes from 'prop-types';
import SizeItem from './SizeItem/SizeItem';
import Counter from './Counter/Counter';
import Preloader from '../Preloader/Preloader';

function ProductPage(props) {
    const item = JSON.parse(`{
        "id": 21,
        "category": 13,
        "title": "Туфли принцессы",
        "images": [
          "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/princess_shoes.jpg",
          "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/princess_shoes_2.jpg"
        ],
        "sku": "1000001",
        "manufacturer": "Dolce & Gabbana",
        "color": "Фиолетовый",
        "material": "Бархат",
        "reason": "Высока мода",
        "season": "Лето",
        "heelSize": "7 см.",
        "price": 3000,
        "sizes": [
            {
                "size": "12 US",
                "avalible": true
            },
            {
                "size": "16 US",
                "avalible": false
            }
        ]
    }`);

    const avalibleSize = item.sizes.filter((size) => size.avalible).map((size) => size.size);
    let selectedSize = '12 US';   //TODO
    selectedSize = avalibleSize.some((size) => size === selectedSize ) || '';   //  o
    const sizesList = avalibleSize.map((size) => <SizeItem key={size} size={size} selected={size === selectedSize} />);

  return (
    <>
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
                    {sizesList.length > 0 && <button className='btn btn-danger btn-block btn-lg' disabled={!selectedSize}>В корзину</button>}
                </div>
            </div>
        </section>
        {false && <Preloader/>}
    </>
  )
}

ProductPage.propTypes = {
    props: PropTypes.any,
}

export default ProductPage

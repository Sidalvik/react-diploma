import React from 'react';
import PropTypes from 'prop-types';
import './ModalSuccess.css';
import { useDispatch } from 'react-redux';
import { resetCart, resetOrderForm } from '../../../store/actions/actionCreators';
 

function ModalSucces(props) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(resetCart());
        dispatch(resetOrderForm());
    }

  return (
    <div className='modal-success' tabIndex='-1' role='dialog'>
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='modal-title'>Заказ отправлен</h5>
                    <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={handleClose}>
                    <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
                <div className='modal-body'>
                    <div className='alert alert-success py-2 px-4' role='alert'>
                        <p className='m-0'>Мы получили Ваш заказ.</p>
                        <p>Оператор скоро свяжется с Вами.</p>
                        <p>Благодарим за покупку!</p>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-primary' onClick={handleClose}>OK</button>
                </div>
            </div>
        </div>
    </div>
  )
}

ModalSucces.propTypes = {
    props: PropTypes.any,
}

export default ModalSucces

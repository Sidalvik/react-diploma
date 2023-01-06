import React from 'react';
import PropTypes from 'prop-types';
import './PaySection.css';

function PaySection(props) {
  return (
    <section>
        <h5>Принимаем к оплате:</h5>
        <div className='footer-pay'>
          <div className='footer-pay-systems footer-pay-systems-paypal'></div>
          <div className='footer-pay-systems footer-pay-systems-master-card'></div>
          <div className='footer-pay-systems footer-pay-systems-visa'></div>
          <div className='footer-pay-systems footer-pay-systems-yandex'></div>
          <div className='footer-pay-systems footer-pay-systems-webmoney'></div>
          <div className='footer-pay-systems footer-pay-systems-qiwi'></div>
        </div>
    </section>
  )
}

PaySection.propTypes = {
    props: PropTypes.any,
}

export default PaySection

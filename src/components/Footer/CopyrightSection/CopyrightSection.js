import React from 'react';
import PropTypes from 'prop-types';
import './CopyrightSection.css';

function CopyrightSection(props) {
  return (
    <section>
        <div className='footer-copyright'>2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.Все права защищены.<br/>
          Доставка по всей России!
        </div>
    </section>
  )
}

CopyrightSection.propTypes = {
    props: PropTypes.any,
}

export default CopyrightSection

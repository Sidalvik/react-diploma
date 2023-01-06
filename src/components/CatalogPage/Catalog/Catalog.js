import React from 'react';
import PropTypes from 'prop-types';

function Catalog(props) {

  return (
      <section className='catalog'>
          <h2 className='text-center'>Каталог</h2>
          {props.children}
      </section>
  )
}

Catalog.propTypes = {
    props: PropTypes.any,
}

export default Catalog

import React from 'react';
import PropTypes from 'prop-types';

function Page404(props) {
  return (
    <section className='top-sales'>
      <h2 className='text-center'>Страница не найдена</h2>
      <p>
        Извините, такая страница не найдена!
      </p>
    </section>
  )
}

Page404.propTypes = {
    props: PropTypes.any,
}

export default Page404

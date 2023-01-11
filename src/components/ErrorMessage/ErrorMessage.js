import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage(props) {
    const {errorText} = props;
    console.log(`Catch error: "${errorText}"`);

  return (
    <div className="alert alert-danger m-1 py-2 px-4 error-message" role="alert">
        <p className='m-0 text-center'>
            <span className='error-logo align-middle display-3 fs-3'>&#9888; </span>
            <span className='error-text align-middle'>{errorText}</span>
        </p>
    </div>
  )
}

ErrorMessage.defaultProps = {
    errorText: 'Error! Возникла непредвиденная ошибка!',
}

ErrorMessage.propTypes = {
    errorText: PropTypes.string,
}

export default ErrorMessage

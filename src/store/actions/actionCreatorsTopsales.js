import PropTypes from 'prop-types';
import {FETCH_TOPSALES_REQUEST,FETCH_TOPSALES_SUCCESS, FETCH_TOPSALES_FILED, RESET_ERROR_TOPSALES, RESET_TOPSALES} from '../actions/actionTypes';

export function fetchTopsalesRequest(abort, ...arg) {
    return {type: FETCH_TOPSALES_REQUEST, payload: {abort}};
}

export function fetchTopsalesSuccess(list) {
    return {type: FETCH_TOPSALES_SUCCESS, payload: {list}};
}   //  TODO fetch

export function fetchTopsalesFiled(error) {
    return {type: FETCH_TOPSALES_FILED, payload: {error}};
}   //  TODO fetch

export function resetErrorTopsales(...arg) {
    return {type: RESET_ERROR_TOPSALES, payload: {}};
}

export function resetTopsales(...arg) {
    return {type: RESET_TOPSALES, payload: {}};
}


    // async functions
export async function fetchTopsales(dispatch, ...arg) {    
  const showErrorMessage = (errorMesage) => {
    dispatch(fetchTopsalesFiled(errorMesage));
    setTimeout(() => dispatch(resetErrorTopsales()), 10 * 1000);
  }
    const abort = new AbortController();

    const url = `${process.env.REACT_APP_TOP_SALES}`;

    dispatch(fetchTopsalesRequest());
    try {
      const responce = await fetch(url, {signal: abort.signal});
      if (responce.ok) {
        try {
          const list = await responce.json();
          dispatch(fetchTopsalesSuccess(list));
        } catch (error) {
          showErrorMessage(error.message);
        }
      } else {
        showErrorMessage(`Error ${responce.status}: ${responce.statusText}`);
      }
    } catch (error) {
      showErrorMessage(error.message);
    }
    };



    //  PropTypes
fetchTopsalesRequest.propTypes = {
    arg: PropTypes.any,
}

fetchTopsalesSuccess.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

fetchTopsalesFiled.propTypes = {
    error: PropTypes.string.isRequired,
}

resetErrorTopsales.propTypes = {
    arg: PropTypes.any,
}

resetTopsales.propTypes = {
    arg: PropTypes.any,
}

fetchTopsales.propTypes = {
    arg: PropTypes.any,
}

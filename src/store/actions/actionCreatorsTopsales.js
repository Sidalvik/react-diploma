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
  const showErrorMessage = (error) => {
    dispatch(fetchTopsalesFiled(error));
    setTimeout(() => dispatch(resetErrorTopsales()), (+process.env.REACT_APP_ERROR_RESET_TIMEOUT || 10) * 1000);
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
          showErrorMessage({message: error.message});
        }
      } else {
        showErrorMessage({status: responce.status, message:`Error ${responce.status}: ${responce.statusText}`});
      }
    } catch (error) {
      showErrorMessage({message: error.message});
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
  error: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string.isRequired,
}).isRequired,
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

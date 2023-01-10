import PropTypes from 'prop-types';
import {ACTIVATE_HEADER_SEARCH_FIELD, RESET_HEADER_SEARCH_FIELD, CHANGE_HEADER_SEARCH_FIELD} from './actionTypes';

export function activateHeaderSearch(...arg) {
    return {type: ACTIVATE_HEADER_SEARCH_FIELD, payload: {}};
}

export function resetHeaderSearch(...arg) {
    return {type: RESET_HEADER_SEARCH_FIELD, payload: {}}
}

export function changeHeaderSearch(value) {
    return {type: CHANGE_HEADER_SEARCH_FIELD, payload: {value}}
}


    //  PropType
activateHeaderSearch.propTypes = {
    arg: PropTypes.any,
}

resetHeaderSearch.propTypes = {
    arg: PropTypes.any,
}

changeHeaderSearch.propTypes = {
    value: PropTypes.string.isRequired,
}
import axios from 'axios';
import config from 'lib/config';
import * as actionTypes from '../constants';

const fetchIndexRequest = () => {
  return {
    type: actionTypes.USER_INDEX_REQUEST
  };
};

const fetchIndexSuccess = () => {
  return {
    type: actionTypes.USER_INDEX_SUCCESS
  };
};

const fetchIndexFailure = () => {
  return {
    type: actionTypes.USER_INDEX_FAILURE
  };
};

function fetchIndex() {
  return (dispatch, getState) => {
    const { meta } = getState().data;

    dispatch(fetchIndexRequest());

    return fetch();
  };
}

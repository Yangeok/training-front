import axios from 'axios';
import config from 'lib/config';
import * as actionTypes from '../constants';

const blogOrYoutube = { blog: '/blog', yotube: '/youtube' };
const feedOrNull = { feed: '/feed', null: null };

// export const getItems = (params = null) => dispatch =>
//   axios
//     .get(`${config.apiUrl}?${params}`)
//     .then(res => {
//       dispatch({
//         type: actionTypes.GET_ALL_ITEMS,
//         items: res.data.items,
//         paginationMeta: res.data.paginationMeta
//       });
//       return res;
//     })
//     .catch(error => {
//       dispatch(
//         getItemDepartmentError({
//           status: error.response,
//           data: error.response
//         })
//       );
//     });

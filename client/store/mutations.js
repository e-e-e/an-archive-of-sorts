import {
  SET_SUBJECTS,
  SET_OMS,
  SET_FILES,
  SET_LOADING,
} from 'constants/mutations';

export default {
  [SET_LOADING]: (state, payload) => {
    state.loading = payload;
  },
  [SET_SUBJECTS]: (state, payload) => {
    state.subjects = payload;
  },
  [SET_OMS]: (state, payload) => {
    state.oms = payload;
  },
  [SET_FILES]: (state, payload) => {
    console.log(SET_FILES, payload);
    // need to attach files to oms.
  },
};

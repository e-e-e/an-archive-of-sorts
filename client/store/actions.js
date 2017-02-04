import axios from 'axios';
import { makeSubjectsHierarchical } from 'lib/utils';

import {
  GET_SUBJECTS,
  GET_OMS,
  GET_FILES,
} from 'constants/actions';

import {
  SET_SUBJECTS,
  SET_OMS,
  SET_FILES,
  SET_LOADING,
} from 'constants/mutations';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export default {
  [GET_SUBJECTS]: ({ commit, state }) => {
    if (!state.subjects) {
      commit(SET_LOADING, true);
      instance.get('subjects')
        .then(res => res.data)
        .then(makeSubjectsHierarchical)
        .then(res => commit(SET_SUBJECTS, res))
        .catch(console.error)
        .then(() => commit(SET_LOADING, false));
    }
  },
  [GET_OMS]: ({ commit }, payload) => {
    instance.get('ommatidia', { params: { ...payload } })
      .then(res => commit(SET_OMS, res.data))
      .catch(console.error);
  },
  [GET_FILES]: ({ commit }, payload) => {
    instance.get('files', { params: { ...payload } })
      .then(res => commit(SET_FILES, res.data))
      .catch(console.error);
  },
};

import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';
import {
  makeSubjectsHierarchical,
  isImage,
  isAudio,
  isVideo,
  isPDF,
  isMarkdown,
  isPlainText } from 'lib/utils';

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

const massageOmData = (omData) => {
  const { children, om_id } = omData;
  const links = [];
  const filesMetadata = [];
  children.forEach((om) => {
    if (om.om_base) {
      links.push(om);
    } else {
      filesMetadata.push(om);
    }
  });
  const omIds = filesMetadata.map(om => om.om_id);
  omIds.push(om_id);

  return instance.get('files', { params: { id: omIds } })
    .then((res) => {
      const files = res.data.map((file) => {
        const om = filesMetadata.find(o => o.om_id === file.related_om);
        return { ...file, ...om };
      });
      const massageOm = {
        ...omData,
        links,
        files: {
          images: _.remove(files, isImage),
          audio: _.remove(files, isAudio),
          video: _.remove(files, isVideo),
          pdfs: _.remove(files, isPDF),
          markdown: _.remove(files, isMarkdown),
          plaintext: _.remove(files, isPlainText),
          others: files,
        },
      };
      return _.omit(massageOm, 'children');
    });
};

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
    commit(SET_LOADING, true);
    instance.get('ommatidia', { params: { ...payload } })
      .then(res => res.data)
      .then(oms => Promise.map(oms, massageOmData))
      .then(oms => commit(SET_OMS, oms))
      .catch(console.error)
      .then(() => commit(SET_LOADING, false));
  },
  [GET_FILES]: ({ commit }, payload) => {
    commit(SET_LOADING, true);
    instance.get('files', { params: { ...payload } })
      .then(res => commit(SET_FILES, res.data))
      .catch(console.error)
      .then(() => commit(SET_LOADING, false));
  },
};

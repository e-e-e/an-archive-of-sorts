import _ from 'lodash';

export function makeSubjectsHierarchical(subjects) {
  const extractChildren = id => (
    _.remove(subjects, s => (s.bt === id))
    .map((t) => {
      let children = extractChildren(t.term_id);
      if (children.length === 0) children = undefined;
      const notes = t.notes || undefined;
      const term = t.term;
      const term_id = t.term_id; // eslint-disable-line
      const facet = t.facet;
      return {
        term_id,
        term,
        notes,
        facet,
        children,
      };
    })
  );
  return extractChildren(null);
}

export const getFileExtension = filename => filename.substr(filename.lastIndexOf('.') + 1);

export const isImage = file => file.mimetype.indexOf('image/') === 0;
export const isAudio = file => file.mimetype.indexOf('audio/') === 0;
export const isVideo = file => file.mimetype.indexOf('video/') === 0;
export const isPDF = file => file.mimetype.indexOf('application/pdf') === 0;
export const isMarkdown = file => file.mimetype.indexOf('text/plain') === 0 && getFileExtension(file.original_name) === 'md';
export const isPlainText = file => file.mimetype.indexOf('text/plain') === 0 && getFileExtension(file.original_name) === 'txt';

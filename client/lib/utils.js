import _ from 'lodash';

export function makeSubjectsHierarchical(subjects) { // eslint-disable-line
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


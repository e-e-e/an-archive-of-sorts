import Vue from 'vue';
import Subject from 'client/components/Subject';

describe('Subject.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Subject),
    });
    expect(vm.$el.querySelector('.subject h1').textContent)
      .to.equal('Subject ');
  });
});

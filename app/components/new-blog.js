import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    saveBlog1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog2', params); 
    }
  }
});

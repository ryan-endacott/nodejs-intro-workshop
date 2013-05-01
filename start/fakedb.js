// Fake in memory database that will allow creating and retrieving notes

var notes = [];

module.exports = {

  addNote: function(title, content) {
    notes.push({
      id: notes.length,
      title: title,
      content: content
    });
  },

  getNotes: function() {
    return notes;
  },

  getNote: function(id) {
    return notes[id];
  }

};
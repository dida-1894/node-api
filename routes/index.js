module.exports = (app) => {
  const notes = require('../controllers/controller.js');
  // creat a new // note
  app.post('/notes', notes.create);
  //  retrieve all note
  app.get('/notes', notes.findAll);
  // retrieve a single note with noteId
  app.get('/notes/:noteId', notes.findOne);
  // update a note with noteId
  app.put('/notes/:noteId', notes.update);
  // Delete a note eith noteId
  app.delete('/notes/:noteId', notes.delete);
}

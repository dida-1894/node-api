const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');

const mongoose       = require('mongoose');
const db             = require('./config/db');
mongoose.Promise = global.Promise;
mongoose.connect(db.url)
.then(() => {
  console.log("Successfully connected to database");
}).catch(err => {
  console.log("Could not connect to the database. Exiting now...");
  console.log(err);
  process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.json({"message":"Welcome to my API"})
});

require('./routes/index.js')(app);

app.listen(3000, () => {
  console.log("server is listen on port 3000");
})

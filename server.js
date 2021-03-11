const { client, syncAndSeed } = require('./db/seed');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const html = require('html-template-tag');

const app = express(morgan);

app.use(morgan('dev'));
app.use(express.static('client'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/dist'))); //start script relies on this

// sendFile sends the /public/index.html file to the client
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')));


// bringing in my routes folder
app.use('/api', require('./routes/index'));


const port = process.env.PORT || 8080;

const init = async () => {
  try {
  await client.connect();
  await syncAndSeed();

  app.listen(port, () => {console.log(`App listening on port ${port}.`)});
  }
  catch(err) {
    console.log('there was an error starting up!', err);
  }
}
init();



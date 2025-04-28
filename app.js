import express from 'express';
import createHomePageTemplate from './views/index.js';
import createNavigationOverlay from './views/navigation_overlay.js';

// create app
const app = express();
app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomePageTemplate());
});

app.get('/navigationoverlay', (req, res) => {
  res.send(createNavigationOverlay());
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
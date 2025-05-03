// app.js
import express from 'express';
import nunjucks from 'nunjucks';
import SERVICES_DATA from './data/services.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// configure nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true  // Set to false in production
});

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('index.njk', { services: SERVICES_DATA });
});

// Quick search popup
app.get('/quick-search', (req, res) => {
  res.render('quick-search-popup.njk', { services: SERVICES_DATA });
});

// Search services based on query
app.get('/search-services', (req, res) => {
  const query = req.query.query?.toLowerCase() || '';
  const filteredServices = SERVICES_DATA.filter(service => 
    service.name.toLowerCase().includes(query)
  );
  
  res.render('services-grid.njk', { services: filteredServices });
});

// Individual service card
app.get('/service-card/:id', (req, res) => {
  const servicePath = '/' + req.params.id;
  const service = SERVICES_DATA.find(s => s.path === servicePath);
  
  if (service) {
    res.render('partials/service-card.njk', { service });
  } else {
    res.status(404).send('Service not found');
  }
});

// Service pages
app.get('/portfolio', (req, res) => {
  res.render('portfolio.njk');
});

app.get('/horizonos', (req, res) => {
  res.render('horizonos.njk');
});

app.get('/aurorae', (req, res) => {
  res.render('aurorae.njk');
});

app.get('/voyageurs', (req, res) => {
  res.render('voyageurs.njk');
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
const express = require('express');

const cors = require('cors');
const axios = require('axios');

const app = express();

// Settings
require('dotenv').config();
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());

// Routes
app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {
  const apiBase = process.env.API_BASE;
  const { endpoint } = req.params;

  const uri = `${apiBase}${endpoint}`;

  axios
    .get(uri)
    .then((response) => res.json(response.data))
    .catch((err) => res.json(err));
});

// Server
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

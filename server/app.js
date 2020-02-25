const path = require('path');
require('dotenv').config({ path: `${path.resolve(process.cwd())}/.env` });

const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const knex = require('../database/knex');
const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
app.use(cors(corsOption));

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Listening on port: ${port}`));

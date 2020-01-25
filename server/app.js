const express = require('express');
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
app.use(cors(corsOption));

app.use('/api/v1', routes);

app.listen(port, () => console.log(`Listening on port: ${port}`));

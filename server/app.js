const express = require('express');
const routes = require('./routes/routes')
const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => console.log(`Listening on port: ${port}`));

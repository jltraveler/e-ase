const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');

require('./config/environment');
require('./database');


const routes          = require('./routes/index');
const configPassport  = require('./passport/config');


const port         = process.env.PORT;
const app          = express();


app.use(bodyParser.json());

configPassport(app, express);

app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

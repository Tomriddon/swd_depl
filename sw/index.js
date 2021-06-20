import express from 'express';
//const express = require('express');
import bodyParser from 'body-parser';
//const bodyParser = require('body-parser');
import hbs from 'express-hbs';
//const hbs = require('express-hbs');
import path from 'path';
//const path = require('path');
import cookieParser from 'cookie-parser';
//const cookieParser = require('cookie-parser');
import {routes} from './routes/router.js';
//const routes = require('./routes/router.js');
import { registerHelpers } from './utils/handlebar-util.js';
//const registerHelpers = require('./utils/handlebar-util.js');
import { overrideMiddleware } from './utils/method-override.js';
//const overrideMiddleware = require('./utils/method-override.js');

const app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));
registerHelpers(hbs);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(overrideMiddleware);
app.use(cookieParser());
app.use(routes);
app.use(express.static(path.resolve('public')));


//const hostname = '127.0.0.1';
const hostname ='80.209.253.123';
const port = 6082
//const port = 3001;
app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running at http://${hostname}:${port}/`);
});

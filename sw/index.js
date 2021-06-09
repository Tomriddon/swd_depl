import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-hbs';
import path from 'path';
import cookieParser from 'cookie-parser';
import {routes} from './routes/router.js';
import { registerHelpers } from './utils/handlebar-util.js';
import { overrideMiddleware } from './utils/method-override.js';

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


const hostname = '127.0.0.1';
const port = 3001;
app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running at http://${hostname}:${port}/`);
});

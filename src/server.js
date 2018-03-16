'use strict';

import express from 'express';
import morgan from 'morgan';
import path from 'path';

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'client')));
app.use(morgan('tiny'));

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

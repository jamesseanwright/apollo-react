'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import morgan from 'morgan';
import path from 'path';
import schema from './schema';

const PORT = 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

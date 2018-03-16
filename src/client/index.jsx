'use strict';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import App from './App/index.jsx';

const graphQlClient = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={graphQlClient}>
        <App />
    </ApolloProvider>,
    document.querySelector('#app'),
);

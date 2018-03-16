import React from 'react';

import {
    ApolloClient,
    gql,
    graphql,
    ApolloProvider,
} from 'react-apollo';

const client = new ApolloClient();

const renderers = [
    [data => data.loading, () => <p>Loading</p>],
    [data => data.error, ({ error }) => <p>{error.message}</p>],
    [() => true, ({ events }) => <p>Render events here!</p>],
];

const renderByData = data => {
    const [_, renderer] = renderers.find(([predicate]) => predicate(data));
    return renderer;
};

const App = () => ({ data }) => renderByData(data);

export default App;

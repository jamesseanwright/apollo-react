import gql from 'graphql-tag';
import React from 'react';
import { ApolloProvider, graphql } from 'react-apollo';

import EventsList from '../Events/EventsList.jsx';

const query = gql`
    query EventsListQuery {
        events {
            id
            summary
        }
    }
`;

const renders = [
    [data => data.loading, () => <p>Loading</p>],
    [data => data.error, ({ error }) => <p>{error.message}</p>],
    [() => true, ({ events }) => <p>Render events here!</p>],
];

const renderByData = data => {
    const [_, renderer] = renders.find(([predicate]) => predicate(data));
    return renderer(data);
};

const App = ({ data }) => renderByData(data);

export default graphql(query)(App);

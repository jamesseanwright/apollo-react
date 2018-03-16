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

const renderFuncs = [
    [data => data.loading, () => <p>Loading</p>],
    [data => data.error, ({ error }) => <p>{error.message}</p>],
    [() => true, ({ events }) => <EventsList events={events} />],
];

const renderByData = data => {
    const [_, renderer] = renderFuncs.find(([predicate]) => predicate(data));
    return renderer(data);
};

const App = ({ data }) => renderByData(data);

export default graphql(query)(App);

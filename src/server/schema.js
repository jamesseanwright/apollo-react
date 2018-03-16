import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `

type Event {
    id: ID!
    summary: String
}

type Query {
    events: [Event]
}
`;

export default makeExecutableSchema({ typeDefs });

export const { typeDefs } = `

type Event {
    id: ID!
    summary: String
}

events.
type Query {
    events: [Events]
}
`;

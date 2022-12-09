const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        country: Nationality!
        friends: [User!]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    enum Nationality {
        ITALY
        CHINA
        POLAND
        GUAM
        ARGENTINA
        AUSTRALIA
        PORTUGAL
    }

`;

module.exports = {
    typeDefs
}
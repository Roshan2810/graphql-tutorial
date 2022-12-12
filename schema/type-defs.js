const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        country: Nationality!
        friends: [User!]
        favouriteMovies:[Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfRelease: Int!
        isInTheater: Boolean!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        country: Nationality = INDIA
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
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
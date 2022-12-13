const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

// initializing the ApolloServer
const server = new ApolloServer({
    typeDefs, resolvers, context: () => {
        return { name: 'Roshan Shah' }
    }
})

//default port configured in apollo-server is 4000
server.listen().then((url) => {
    console.log(`Your URL is running on port: ${url.port}`)
})
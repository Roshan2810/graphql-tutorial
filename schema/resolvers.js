const { UserList } = require('./FakeData');

const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (_, args) => {
            const { id } = args;
            return UserList.filter(el => el.id === Number(id))[0]
        }
    }
}

module.exports = {
    resolvers
}
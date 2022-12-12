const { UserList, MovieList } = require('./FakeData');

const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (_, args) => {
            const { id } = args;
            return UserList.filter(el => el.id === Number(id))[0]
        },
        movies: () => {
            return MovieList
        },
        movie: (_, args) => {
            const { name } = args;
            return MovieList.filter(el => el.name.includes(name))[0];
        }
    },
    User: {
        favouriteMovies: () => {
            return MovieList.filter(el => el.yearOfRelease >= 2000 && el.yearOfRelease <= 2010)
        }
    }
}

module.exports = {
    resolvers
}
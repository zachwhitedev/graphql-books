const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

// dummy data 
var books = [
    {name: 'Book One', genre: 'genre one', id: '1'},
    {name: 'Book Two', genre: 'genre 2', id: '2'},
    {name: 'Book Three', genre: 'genre 3', id: '3'}
]

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent,args){
             return _.find(books, {id: args.id });                
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})


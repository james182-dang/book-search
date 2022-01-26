// import gql
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }

    input AddNewBook {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(addBook: AddNewBook!): User
        removeBook(removeBook: ID!): User
    }

`

module.exports = typeDefs;
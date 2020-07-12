const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const app = express();
const typeDefs = `
    type Query {
        customers: [Customer]
    }

    type Customer {
        customer_id: ID,
        customer_name: String,
        active_accounts: Float,
        _id: String
    }
`;

module.exports = new ApolloServer({
    typeDefs,
    resolvers
});
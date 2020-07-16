const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const app = express();
const typeDefs = `
    type Query {
        customers: [Customer]
        accounts: [Account]
    }

    type Customer {
        customer_id: ID,
        customer_name: String,
        active_accounts: Float,
        _id: String
    }

    type Account {
        account_number: ID,
        account_type: String,
        bank_name: String,
        balance: Float,
        customer_id: String,
        is_active: Boolean,
        _id: String
    }
`;

module.exports = new ApolloServer({
    typeDefs,
    resolvers
});
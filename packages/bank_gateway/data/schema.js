const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const app = express();
const typeDefs = `
    type Query {
        customers: [Customer]
        customer(customer_id:String!): Customer
        accounts: [Account]
        account(account_number: String!): Account
        moneytransfers: [MoneyTransfer]
        moneytransfer(transaction_id: String!): MoneyTransfer
    }

    type Mutation {
        customer(customer_name: String!,phone_no:Float ,address:String): Customer
        account(account_type: String!, bank_name: String!, branch: String!, ifsc_code: String!, balance: Float, customer_id: String): Account
        moneytransfer(from_account: String!, to_account: String!, amount: Float!, remark: String): MoneyTransfer
    }

    type Customer {
        customer_id: String,
        customer_name: String,
        active_accounts: Float,
        phone_no:Float,
        address: String
        _id: String
    }

    type Account {
        account_number: String,
        account_type: String,
        bank_name: String,
        branch: String,
        ifsc_code: String,
        balance: Float,
        customer_id: String,
        is_active: Boolean,
        _id: String
    }

    type MoneyTransfer {
        transaction_id: String,
        from_account: String,    
        to_account: String,   
        amount: Float,       
        remark: String,
        created_at: String   
    }
`;

module.exports = new ApolloServer({
    typeDefs,
    resolvers
});
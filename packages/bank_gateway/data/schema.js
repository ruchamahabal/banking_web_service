const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const app = express();
const typeDefs = `
    type Query {
        customers: [Customer]
        accounts: [Account]
        account(account_number: String!): Account
        moneytransfers:[MoneyTransfer]
    }

    type Mutation {
        customer(customer_id: ID!, customer_name: String!, active_accounts: Float!): Customer
        account(account_type: String!, bank_name: String!, branch: String!, ifsc_code: String!, balance: Float, customer_id: String): Account
        moneytransfers(t_id: ID!, rec_accno: ID!, rec_Fname: String!, recLname: String!, bank_name: String!, ifsc_code: String!, mob_no: Int!, amt: Float!, remark: String!, acc_no: Int!, trans_type: String!, customer_id: Int!): MoneyTransfer
    }

    type Customer {
        customer_id: ID,
        customer_name: String,
        active_accounts: Float,
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
        t_id: ID,
        rec_accno: ID,    
        rec_Fname: String,   
        rec_Lname: String,    
        bank_name: String,    
        ifsc_code: String,    
        mob_no: Int,       
        amt: Float,          
        remark: String,       
        acc_no: Int,        
        trans_type: String, 
        customer_id: Int   
    }
`;

module.exports = new ApolloServer({
    typeDefs,
    resolvers
});
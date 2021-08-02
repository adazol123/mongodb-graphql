import {  gql } from 'apollo-server-express'
    // Construct a schema, using GraphQL schema language
    export const typeDefs = gql`
      type Query {
        users: [User]
      }
      type User {
          id: ID!
          name: String!
          message: String
          email: String
      }

      type Mutation {
          createUser(
              name: String!, 
              message: String,
              email: String
            
            ): User!
      }
    `;
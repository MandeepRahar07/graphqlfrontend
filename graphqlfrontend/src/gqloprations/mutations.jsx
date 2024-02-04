import { gql } from "@apollo/client";

export const ADD_QUOTES = gql`
mutation CreateQuote($quoteInput: quoteInput!) {
    createQuote(quoteNew: $quoteInput) {
      title
      name
    }
  }
`

export const DELETE_QUOTE = gql`
mutation DeleteQuote($_id: ID!) {
    findAndDeleteQuote(_id: $_id) {
      title
      name
    }
  }
  
`

export const EDIT_QUOTE = gql`
  mutation EditQuote($_id: ID!, $quoteUpdate: quoteInput!) {
    editQuote(_id: $_id, quoteUpdate: $quoteUpdate) {
      _id
      title
      name
    }
  }
`;
import { gql } from "@apollo/client";

export const AUTH_ON_LOAD = gql`
    mutation AutOnLoad($token: String!) {
        authOnLoad(token: $token) {
            id
        }
    }
`;

export const AUTH_SIGNIN = gql`
    mutation AuthSignin($identifier: String!, $password: String!) {
        signin(data: { identifier: $identifier, password: $password }) {
            token
            user {
                id
                firstName
                lastName
            }
        }
    }
`;

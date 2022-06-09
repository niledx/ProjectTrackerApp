import { gql } from '@apollo/client';

const GET_CLIENTS = gql`
    query getClients{
        clients{
            name
            phone
            email
            id
        } 
    }
`;

export { GET_CLIENTS };
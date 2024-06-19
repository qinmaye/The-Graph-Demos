import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2');

export default client;

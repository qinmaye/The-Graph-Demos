import { GraphQLClient } from 'graphql-request';

const apiKey = process.env.VUE_APP_GRAPHQL_API_KEY;

// https://thegraph.com/explorer/subgraphs/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum?view=Query&chain=arbitrum-one
const UniswapV2Client = new GraphQLClient(`https://gateway-arbitrum.network.thegraph.com/api/${apiKey}/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum`);

export default UniswapV2Client;

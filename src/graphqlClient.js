import { GraphQLClient } from 'graphql-request';

const apiKey = process.env.VUE_APP_GRAPHQL_API_KEY;

// https://thegraph.com/explorer/subgraphs/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum?view=Query&chain=arbitrum-one
const UniswapV2Client = new GraphQLClient(`https://gateway-arbitrum.network.thegraph.com/api/${apiKey}/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum`);

// https://thegraph.com/explorer/subgraphs/3WFXNz46rk4iuVgsBybcGtxMa4cbHkBLfuSjUvvqs2MD?view=Query&chain=mainnet
const ethBlocksClient = new GraphQLClient(`https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/3WFXNz46rk4iuVgsBybcGtxMa4cbHkBLfuSjUvvqs2MD`);

// https://thegraph.com/explorer/subgraphs/AwoxEZbiWLvv6e3QdvdMZw4WDURdGbvPfHmZRc8Dpfz9?view=Query&chain=mainnet
const NFTClient = new GraphQLClient(`https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/AwoxEZbiWLvv6e3QdvdMZw4WDURdGbvPfHmZRc8Dpfz9`);

export { UniswapV2Client, ethBlocksClient, NFTClient }

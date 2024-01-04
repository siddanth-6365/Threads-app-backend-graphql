export const mutations = `#graphql
createThread(description: String!, userId: String!, media: [MediaInput!]!) : createThreadResponseType
createConnectedThread(parentThreadId: String!, childThreadId: String!): ConnectedThread
`;

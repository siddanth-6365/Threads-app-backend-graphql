export const queries = `#graphql

getThreads(): [any]
getConnectedThreadsByParent(parentThreadId: String!): [ConnectedThread]


`;
// need to implement this getThreads type for now it is any

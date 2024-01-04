export const typeDefs = `#graphql
type createThreadResponseType {
  message: String,
  id: String
}

type Thread {
  id: String
  createdAt: DateTime
  description: String
  userId: String
  comments: [Comment]
  likes: [Like]
  Media: [Media]
  User: User
  connectedThreads: [ConnectedThread]
}

type ConnectedThread {
  id: String
  createdAt: DateTime
  parentThreadId: String
  childThread: Thread
}
input MediaInput {
    url: String!
    type: MediaType!
  }
  
  enum MediaType {
    IMAGE
    VIDEO
  }
`;

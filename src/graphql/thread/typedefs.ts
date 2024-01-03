export const typeDefs = `#graphql
type createThreadResponseType {
  message: String,
  id: String
}

type ThreadResponseType {
  
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

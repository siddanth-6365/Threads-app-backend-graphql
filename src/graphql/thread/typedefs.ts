export const typeDefs = `#graphql
type ResponseType {
  message: String,
  id: String
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

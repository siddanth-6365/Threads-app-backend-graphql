export const queries = `#graphql

getUserToken(email: String!,password: String!): String
getCurrentloginedUser: User

`;
// here User type we are adding in typedefs file and called in server
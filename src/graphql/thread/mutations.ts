export const mutations = `#graphql
createThread(description: String!, userId: String!, media: [MediaInput!]!) : ResponseType

`;

//createThread mutation includes nested media creation with media: { create: { data: $media } }

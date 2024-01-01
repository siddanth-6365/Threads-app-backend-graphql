import UserService from "../../services/user";
import { CreateUserPayload, UserPayload } from "../../interfaces/user";

const queries = {
  getUserToken: async (_: any, payload: UserPayload) => {
    const token = UserService.getUserToken(payload);
    return token;
  },
  getCurrentloginedUser: async (_: any, params: any, context: any) => {
    // from context i can get the user details like id,email
    // remaing create an new fn and get it by id
    if (context && context.user) {
      const user = UserService.getUserByid(context.user.id);
      return user;
    }
    return {
      message: "no user found or logged in",
    };
  },
};

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = UserService.createUser(payload);
    return res;
  },
};

export const resolvers = { queries, mutations };

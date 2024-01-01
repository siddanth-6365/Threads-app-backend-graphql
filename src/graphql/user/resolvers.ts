import UserService from "../../services/user";
import { CreateUserPayload, UserPayload } from "../../interfaces/user";

const queries = {
  getUserToken: async (_: any, payload: UserPayload) => {
    const token = UserService.getUserToken(payload);
    return token;
  },
};

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = UserService.createUser(payload);
    return res;
  },
};

export const resolvers = { queries, mutations };

import { createThreadPayload } from "../../interfaces/thread";
import LikeService from "../../services/like";

const queries = {};

const mutations = {
  addLikeToThread: async (
    _: any,
    payload: { threadId: string },
    context: any
  ) => {
    const userId = context.user.id;
    const res = await LikeService.addLikeToThread(payload, userId);
    return res;
  },
};

export const resolvers = { queries, mutations };

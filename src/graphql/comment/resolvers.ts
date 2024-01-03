import { createCommentPayload } from "../../interfaces/comment";
import CommentService from "../../services/comment";
const queries = {
  getCommentsByThreadId: (_: any, threadId: string) => {
    const res = CommentService.getCommentsByThreadId(threadId);
    return res;
  },
};

const mutations = {
  createComment: async (
    _: any,
    payload: createCommentPayload,
    context: any
  ) => {
    const userId = context.user.id;
    const res = CommentService.createComment(payload, userId);
    return res;
  },
};

export const resolvers = { queries, mutations };

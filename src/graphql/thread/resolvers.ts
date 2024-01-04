import {
  createThreadPayload,
  getConnectedThreadsInput,
} from "../../interfaces/thread";
import ThreadService from "../../services/thread";

const queries = {};

const mutations = {
  createThread: async (_: any, payload: createThreadPayload, context: any) => {
    // if(context && context.user){
    const res = ThreadService.createThread(payload);
    return res;
  },
  createConnectedThread: async (_: any, payload: getConnectedThreadsInput) => {
    const res = ThreadService.getConnectedThreads(payload);
    return res;
  },
};

export const resolvers = { queries, mutations };

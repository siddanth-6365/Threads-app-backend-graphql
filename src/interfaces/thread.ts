export interface createThreadPayload {
  description: string;
  userId: string;
  media:  MediaInput[];
}

interface MediaInput {
  url: string;
  type: MediaType;
}

export interface getConnectedThreadsInput {
  parentThreadId: string;
  childThreadId: string;
}

enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

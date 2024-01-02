export interface createThreadPayload {
  description: string;
  userId: string;
  media:  MediaInput[];
}

interface MediaInput {
  url: string;
  type: MediaType;
}

enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

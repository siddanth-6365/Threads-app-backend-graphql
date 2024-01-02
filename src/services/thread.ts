import { prismaClient } from "../lib/db";
import { createThreadPayload } from "../interfaces/thread";

class ThreadService {
  public static async createThread(payload: createThreadPayload) {
    try {
      const { description, userId, media } = payload;

      const createdThread = await prismaClient.thread.create({
        data: { description, userId },
      });

      // Step 2: Create the media and connect it to the thread
      const createdMedia = await prismaClient.media.createMany({
        data: media.map(mediaItem => ({
          ...mediaItem,
          threadId: createdThread.id
        })),
      });

      return {
        id: createdThread.id,
        message: "Created thread successfully",
      };
    } catch (error) {
      console.error("Error creating thread:", error);
      throw error;
    } finally {
      await prismaClient.$disconnect(); // Ensure the database connection is closed
    }
  }
}

export default ThreadService;

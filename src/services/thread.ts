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
        data: media.map((mediaItem) => ({
          ...mediaItem,
          threadId: createdThread.id,
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

  public static async getThreads(payload: any) {
    try {
      const threads = await prismaClient.thread.findMany({
        include: {
          comments: true,
          likes: true,
          Media: true,
          User: true,
        },
      });

      return threads;
    } catch (error) {
      console.error("Error getting threads:", error);
      throw error;
    }
  }

  public static async getConnectedThreads(payload: any) {
    try {
      const { parentThreadId, childThreadId } = payload;
      const connectedThread = await prismaClient.connectedThreads.create({
        data: {
          parentThreadId,
          childThreadId,
        },
      });

      return connectedThread;
    } catch (error) {
      console.error("Error creating connected thread:", error);
      throw error;
    }
  }
}

export default ThreadService;

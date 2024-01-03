import { prismaClient } from "../lib/db";

// Define a custom Prisma update type for the Thread model
type ThreadUpdateWithLikes = {
    likeCount?: {
      increment: number;
    };
  };
  
class LikeService {
  public static async addLikeToThread(payload: any, userId: string) {
    try {
      const { threadId } = payload;

      // Use the custom update type in the update method
      await prismaClient.thread.update({
        where: { id: threadId },
        data: {
          likeCount: {
            increment: 1,
          },
        } as ThreadUpdateWithLikes, // Cast to the custom update type
      });

      await prismaClient.like.create({
        data: {
          userId: userId,
          threadId: threadId,
        },
      });

      return {
        message: "Like added successfully",
      };
    } catch (error) {
      console.error("Error adding like:", error);
      throw error;
    }
  }
}

export default LikeService;

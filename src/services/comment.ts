import { prismaClient } from "../lib/db";
import { createCommentPayload } from "../interfaces/comment";

class CommentService {
  public static async createComment(
    payload: createCommentPayload,
    userId: string
  ) {
    try {
      const { content, threadId } = payload;

      const createdComment = await prismaClient.comment.create({
        data: { content, userId, threadId },
      });
      
      return {
        message: "comment created successfully",
      };
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    } finally {
      await prismaClient.$disconnect();
    }
  }

  public static async getCommentsByThreadId(threadId: string) {
    try {
      const comments = await prismaClient.comment.findMany({
        where: { threadId: threadId },
      });

      const transformedComments = comments.map((comment) => ({
        content: comment.content,
        userId: comment.userId,
      }));

      return transformedComments;
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    } finally {
      await prismaClient.$disconnect();
    }
  }
}

export default CommentService;

import JWT from "jsonwebtoken";
import { createHmac, randomBytes } from "node:crypto";
import { prismaClient } from "../lib/db";
import { CreateUserPayload, UserPayload } from "../interfaces/user";

let JWT_SECRET = "jwt-secret";

class UserService {
  private static generateHash(salt: string, password: string) {
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    return hashedPassword;
  }

  public static createUser(payload: CreateUserPayload) {
    const { firstName, lastName, email, password } = payload;

    const salt = randomBytes(32).toString("hex"); // this generates an salt and that we store in user table
    const hashedPassword = this.generateHash(salt, password);

    return prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        salt,
        password: hashedPassword,
      },
    });
  }

  public static async getUserToken(payload: UserPayload) {
    const { email, password } = payload;
    const user = await prismaClient.user.findUnique({ where: { email } });
    if (!user) throw new Error("user not found");

    const userSalt = user.salt;
    const usersHashPassword = UserService.generateHash(userSalt, password);

    if (usersHashPassword !== user.password)
      throw new Error("Incorrect Password");

    const token = JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);
    return token;
  }
}

export default UserService;

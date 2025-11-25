import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const prisma = new PrismaClient();

export async function createUser(username: string, email: string, password: string) {
  return await prisma.user.create({
    data: {
      name: username,
      email,
      password: await bcrypt.hash(password, 10),
    },
  });
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  });
}

export async function validateUser(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) {
    return null;
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }
  return user;
}

export function generateToken(user: any) {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret');
  } catch (e) {
    return null;
  }
}
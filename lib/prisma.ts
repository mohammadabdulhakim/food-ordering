import { PrismaClient } from "./generated/prisma";

const globalPrisma = global as unknown as {prisma: PrismaClient};


export const dp = globalPrisma.prisma ?? new PrismaClient({log:["error", "query", "warn"]});

if(process.env.NODE_ENV !== "production") globalPrisma.prisma = dp;

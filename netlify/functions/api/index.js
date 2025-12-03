import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function handler(event, context) {
  try {
    const users = await prisma.user.findMany()

    return {
      statusCode: 200,
      body: JSON.stringify(users)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }
  }
}

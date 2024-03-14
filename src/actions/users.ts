"use server"

import { db } from "@/lib/db"
import { User } from "@prisma/client"

const addUser = async (user: FormData) => 
await db.user.create({ data: {
    name: user.get("name") as string,
    email: user.get("email") as string,
} });



const getUsers = async () => await db.user.findMany();



export { addUser , getUsers };
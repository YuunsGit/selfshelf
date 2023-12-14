"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addUser(
  email: string,
  password: string,
  name: string,
  role: string,
) {
  try {
    return await prisma.user.create({
      data: {
        email,
        name,
        password,
        role,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteUser(id: string) {
  try {
    return await prisma.user.delete({ where: { id } });
  } catch (e) {
    console.log(e);
  }
}

export async function updateUser(
  email: string,
  attr: {
    email?: string;
    password?: string;
    name?: string;
    role?: string;
  },
) {
  try {
    return await prisma.user.update({ data: attr, where: { email } });
  } catch (e) {
    console.log(e);
  }
}

export async function getUser(id: string) {
  try {
    return await prisma.user.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
  }
}

export async function listUser() {
  try {
    return await prisma.user.findMany();
  } catch (e) {
    console.log(e);
  }
}

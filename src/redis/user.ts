"use server";

import { kv } from "@vercel/kv";
import * as crypto from "crypto";

export async function addUser(
  email: string,
  password: string,
  name: string,
  role: string,
) {
  const uuid = crypto.randomUUID();
  try {
    return await kv.hset(`user:${uuid}`, {
      name,
      email,
      password,
      role,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteUser(id: string) {
  try {
    return await kv.del(`user:${id}`);
  } catch (e) {
    console.log(e);
  }
}

export async function updateUser(
  id: string,
  attr: {
    email?: string;
    password?: string;
    name?: string;
    role?: string;
  },
) {
  try {
    return await kv.hset(`user:${id}`, attr);
  } catch (e) {
    console.log(e);
  }
}

export async function getUser(id: string) {
  try {
    return await kv.hgetall(`user:${id}`);
  } catch (e) {
    console.log(e);
  }
}

export async function listUser() {
  try {
    return await kv.keys(`user:*`);
  } catch (e) {
    console.log(e);
  }
}

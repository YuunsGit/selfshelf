"use server";

import { kv } from "@vercel/kv";

export async function addBook(
  isbn: string,
  author: string,
  title: string,
  pbdate: string,
  cover: string,
  location: string,
  languages: string,
  description: string,
) {
  try {
    return await kv.hset(`book:${isbn}`, {
      isbn,
      author,
      title,
      pbdate,
      cover,
      location,
      languages,
      description,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteBook(isbn: string) {
  try {
    return await kv.del(`book:${isbn}`);
  } catch (e) {
    console.log(e);
  }
}

export async function updateBook(
  isbn: string,
  attr: {
    author?: string;
    title?: string;
    pbdate?: string;
    cover?: string;
    location?: string;
    languages?: string;
    description?: string;
  },
) {
  try {
    return await kv.hset(`book:${isbn}`, attr);
  } catch (e) {
    console.log(e);
  }
}

export async function getBook(isbn: string) {
  try {
    return await kv.hgetall(`book:${isbn}`);
  } catch (e) {
    console.log(e);
  }
}

export async function listBooks() {
  try {
    return await kv.keys(`book:*`);
  } catch (e) {
    console.log(e);
  }
}

"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addBook(
  isbn: string,
  author: string,
  title: string,
  publishDate: Date,
  cover: string,
  location: string,
  languages: string[],
  description: string,
) {
  try {
    return await prisma.book.create({
      data: {
        isbn,
        title,
        author,
        description,
        cover,
        languages,
        location,
        publishDate: publishDate,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteBook(isbn: string) {
  try {
    return await prisma.book.delete({
      where: {
        isbn,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function updateBook(
  isbn: string,
  attr: {
    author: string;
    title: string;
    publishDate: Date;
    cover: string;
    location: string;
    languages: string[];
    description: string;
  },
) {
  try {
    return await prisma.book.update({ data: attr, where: { isbn } });
  } catch (e) {
    console.log(e);
  }
}

export async function getBook(isbn: string) {
  try {
    const book: Book | null = await prisma.book.findUnique({ where: { isbn } });
    return book;
  } catch (e) {
    console.log(e);
  }
}

export async function listBooks() {
  try {
    return await prisma.book.findMany();
  } catch (e) {
    console.log(e);
  }
}

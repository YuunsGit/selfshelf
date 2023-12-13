"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addLoan(
  userId: string,
  isbn: string,
  loanDate: Date,
  dueDate: Date,
) {
  try {
    return await prisma.loan.create({
      data: {
        userId,
        bookId: isbn,
        loanDate,
        dueDate,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteLoan(id: string) {
  try {
    return await prisma.loan.delete({ where: { id } });
  } catch (e) {
    console.log(e);
  }
}

export async function updateLoan(
  id: string,
  attr: {
    isbn?: string;
    loanDate?: string;
    dueDate?: string;
  },
) {
  try {
    return await prisma.loan.update({ data: attr, where: { id } });
  } catch (e) {
    console.log(e);
  }
}

export async function getLoan(id: string) {
  try {
    return await prisma.loan.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
  }
}

export async function listLoans() {
  try {
    return await prisma.loan.findMany();
  } catch (e) {
    console.log(e);
  }
}

export async function getReaders(isbn: string) {
  try {
    return await prisma.loan.findMany({ where: { bookId: isbn } });
  } catch (e) {
    console.log(e);
  }
}

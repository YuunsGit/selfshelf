"use server";

import { kv } from "@vercel/kv";

export async function addLoan(
  id: string,
  isbn: string,
  loandate: string,
  duedate: string,
) {
  try {
    return await kv.hset(`loan:${isbn}`, {
      id,
      isbn,
      loandate,
      duedate,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteLoan(isbn: string) {
  try {
    return await kv.del(`loan:${isbn}`);
  } catch (e) {
    console.log(e);
  }
}

export async function updateLoan(
  isbn: string,
  attr: {
    isbn?: string;
    id?: string;
    loandate?: string;
    duedate?: string;
  },
) {
  try {
    return await kv.hset(`loan:${isbn}`, attr);
  } catch (e) {
    console.log(e);
  }
}

export async function getLoan(isbn: string) {
  try {
    return await kv.hgetall(`loan:${isbn}`);
  } catch (e) {
    console.log(e);
  }
}

export async function listLoans() {
  try {
    return await kv.keys(`loan:*`);
  } catch (e) {
    console.log(e);
  }
}

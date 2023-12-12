import { PrismaClient } from "@prisma/client";
import data from "../data.json";
const prisma = new PrismaClient();
async function main() {
  for (const book of data) {
    await prisma.book.create({
      data: {
        isbn: book.isbn,
        title: book.title,
        author: book.author,
        description: book.description,
        cover: book.cover,
        languages: book.languages,
        location: book.location,
        publishDate: new Date(book.pbdate),
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

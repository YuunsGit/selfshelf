interface Book {
  isbn: string;
  author: string;
  title: string;
  publishDate: Date;
  cover: string;
  location: string;
  languages: string[];
  description: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface Loan {
  id: string;
  active: boolean;
  loanDate: Date;
  dueDate: Date;
  userId: string;
  bookId: string;
}

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
  userId: string;
  isbn: string;
  loanDate: Date;
  dueDate: Date;
}

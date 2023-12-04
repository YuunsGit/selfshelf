import Header from "@/components/Header";
import Footer from "@/components/Footer";
import data from "../../public/data.json";
import { addBook } from "@/redis/book";

export default function Home() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

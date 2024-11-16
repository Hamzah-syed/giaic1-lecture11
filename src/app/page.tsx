import Image from "next/image";
import Link from "next/link";

// interface IBook {
//   title: string;
//   id: number;
// }

// const books: IBook[] = [
//   {
//     title: "The Day",
//     id: 1,
//   },
//   {
//     title: "The Night",
//     id: 2,
//   } 
// ]


export default async function Home() {

  const res = await fetch("https://simple-books-api.glitch.me/books", {
    method: "GET",
  })

  interface IBook {
    "id": number,
    "name": string,
    "type": string,
    "available": boolean
  }

  const books: IBook[] = await res.json()


  console.log(books)

  return (
    <div>
      {
        books.map((book) => {
          return <div key={book.id}>
            <Link href={`/${book.id}`}>
              <h1>{book.name}</h1>
            </Link>
          </div>
        })
      }
    </div>
  );
}

import { Person } from './interfaces';

let user: Person = {
    firstname: 'Christoffer',
    lastname: 'Wallenberg',
    age: 34,
    city: 'Göteborg'
}

function showName(person: Person) {
    console.log(person.firstname);
}

showName(user);

console.log(user);


interface Book {
    title: string,
    author: string,
    numPage: number
}

const books: Book[] = [];
const book: Book = { title: 'Alice in Wonderland', author: 'Lewis Carroll', numPage: 154 };
const book2: Book = { title: 'The Red House Mystery', author: 'A.A. Milne', numPage: 200 };

books.push(book);
books.push(book2);

console.log(books);


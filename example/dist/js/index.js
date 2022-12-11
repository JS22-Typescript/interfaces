let user = {
    firstname: 'Christoffer',
    lastname: 'Wallenberg',
    age: 34,
    city: 'Göteborg'
};
function showName(person) {
    console.log(person.firstname);
}
showName(user);
console.log(user);
const books = [];
const book = { title: 'Alice in Wonderland', author: 'Lewis Carroll', numPage: 154 };
const book2 = { title: 'The Red House Mystery', author: 'A.A. Milne', numPage: 200 };
books.push(book);
books.push(book2);
console.log(books);
export {};

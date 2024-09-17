// Define the Book interface
interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string; // Optional property
}

// Define the Library class
class Library {
    // Private property to store books
    private books: Book[] = [];

    // Public method to add a book
    public addBook(book: Book): void {
        this.books.push(book);
    }

    // Public method to get details of a book by ISBN
    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }
}

// Define the DigitalLibrary class that extends Library
class DigitalLibrary extends Library {
    // Readonly property for the website
    public readonly website: string;

    // Constructor to initialize website
    constructor(website: string) {
        super();
        this.website = website;
    }

    // Public method to list all book titles
    public listBooks(): string[] {
        return this.books.map(book => book.title);
    }
}

// Create an instance of DigitalLibrary
const myDigitalLibrary = new DigitalLibrary('https://www.mydigitallibrary.com');

// Add books to the library
myDigitalLibrary.addBook({
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0451524935',
    publishedYear: 1949,
    genre: 'Dystopian'
});

myDigitalLibrary.addBook({
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '978-0060935467',
    publishedYear: 1960
});

// Get details of a specific book
const bookDetails = myDigitalLibrary.getBookDetails('978-0451524935');
if (bookDetails) {
    console.log('Book Details:', bookDetails);
} else {
    console.log('Book not found.');
}

// List all book titles
console.log('Book Titles:', myDigitalLibrary.listBooks());

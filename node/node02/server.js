import express  from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

const books = [
    { id: 1, title: "The Hobbit", genre: "Fantasy" },
    { id: 2, title: "1984", genre: "Dystopian" },
    { id: 3, title: "The Fellowship of the Ring", genre: "Fantasy" },
    { id: 4, title: "Brave New World", genre: "Dystopian" },
    { id: 5, title: "The Two Towers", genre: "Fantasy" }
];

app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
    if (!req.body.title || !req.body.author) {
        return res.status(400).json({ message: "Title and Author are required" });
    }
    
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    
    books.push(newBook);
    res.status(201).json(newBook); // 201 means Created
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running smoothly on http://localhost:${PORT}`);
});
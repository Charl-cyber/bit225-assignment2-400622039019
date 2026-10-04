const books = [
    {
        title: "Introduction to Computer Science",
        author: "John Smith",
        category: "IT",
        copies: 5
    },
    {
        title: "Business Management",
        author: "Mary Johnson",
        category: "Business",
        copies: 3
    },
    {
        title: "Principles of Science",
        author: "David Brown",
        category: "Science",
        copies: 4
    },
    {
        title: "Introduction to Art",
        author: "Sarah Williams",
        category: "Arts",
        copies: 2
    },
    {
        title: "Web Development Basics",
        author: "James Wilson",
        category: "IT",
        copies: 6
    },
    {
        title: "Entrepreneurship",
        author: "Linda Davis",
        category: "Business",
        copies: 3
    }
];

const bookList = document.getElementById("book-list");

function displayBooks() {
    bookList.innerHTML = "";

    books.forEach(function(book) {
        const bookCard = document.createElement("div");

        bookCard.className = "book-card";

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Copies Available:</strong> ${book.copies}</p>
        `;

        bookList.appendChild(bookCard);
    });
}

displayBooks();
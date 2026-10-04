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
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");

function displayBooks() {

    bookList.innerHTML = "";

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    books.forEach(function(book) {

        if (
            !book.title.toLowerCase().includes(searchText) ||
            (selectedCategory !== "All" && book.category !== selectedCategory)
        ) {
            return;
        }

        const bookCard = document.createElement("div");

        bookCard.className = "book-card";

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Copies Available:</strong> ${
            book.copies > 0 ? book.copies : "Out of stock"
        }</p>
            <button class="borrow-btn" ${
            book.copies === 0 ? "disabled" : ""
        }>Borrow</button>
        `;

        const borrowButton = bookCard.querySelector(".borrow-btn");

        borrowButton.addEventListener("click", function() {

            if (book.copies > 0) {
                book.copies--;
                displayBooks();
            }

        });

        bookList.appendChild(bookCard);
    });
}

searchInput.addEventListener("input", displayBooks);

categoryFilter.addEventListener("change", displayBooks);

displayBooks();
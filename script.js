import { addBookToPage } from "./dom.js";

const searchForm = document.getElementsByClassName("search")[0];
const booksContainer = document.getElementsByClassName("books")[0];
let searchTerm;

// When search form is submitted, inputText is now the user's input
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputText = document
        .getElementsByClassName("search-container__text")[0]
        .value.replace(/\s/g, "+");
    console.log(inputText);
    clearBookData(); //Function that removes DOM of previous books
    getBookData(inputText); //Function that retrieves API data & ammends data to page
});

//Function that removes previous API results from page
const clearBookData = () => {
    while (booksContainer.firstChild) {
        booksContainer.removeChild(booksContainer.firstChild);
    }
};

// Function gets data from Google Book API
const getBookData = async (inputText) => {
    searchTerm = `https://www.googleapis.com/books/v1/volumes?q=${inputText}`;
    console.log(searchTerm);
    const response = await fetch(searchTerm); //fetches data
    const bookData = await response.json(); //puts data in JSON format
    bookData.items.map((book) => {
        addBookToPage(book); //calls DOM function that formats data and adds to page
    });
};

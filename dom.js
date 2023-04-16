//Function that takes individual book data, adds needed elements to page.
const addBookToPage = (book) => {
    const fragment = document.createDocumentFragment();

    //if IMG is available, adds to page, if not uses placeholder img
    const img = document.createElement("img");
    book.volumeInfo.hasOwnProperty("imageLinks")
        ? img.setAttribute("src", book.volumeInfo.imageLinks.thumbnail)
        : img.setAttribute("src", "http://placekitten.com/200/300");

    //adds book title to page, trims it if over 40 chars
    const title = document.createElement("h3");
    title.textContent = checkValid(book.volumeInfo, "title", 45);

    //if authors are available, adds authors to page, if not prints err msg
    const authors = document.createElement("h4");
    authors.textContent = checkValid(book.volumeInfo, "authors", 20);

    //adds description of book to page if available, also trims to 400 chars.
    const description = document.createElement("h5");
    description.textContent = checkValid(book.volumeInfo, "description", 400);

    //appends all previous book data to page
    const div = document.createElement("div");
    div.classList.add("books-book");
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(authors);
    div.appendChild(description);
    fragment.appendChild(div);

    const bookDiv = document.querySelector(".books");
    bookDiv.appendChild(fragment);
};

//Function that takes a data element, property to be found, and length of desired string
//and checks if all requirements are valid. Issues present error message.
const checkValid = (element, property, length) => {
    let value;
    element.hasOwnProperty(`${property}`) &&
    element[`${property}`].length <= length
        ? (value = `${element[property]}`)
        : element.hasOwnProperty(property) && element[property].length > length
        ? (value = `${element[property].substring(0, length)}...`)
        : (value = `${property} not found`);
    console.log(value, element, property, length);
    return value;
};

export { addBookToPage };

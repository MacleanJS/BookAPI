# Book Search Engine - Using Google Books API

## Demo & Snippets

Snippet from SPA where user has searched the term 'cats' \
![image](https://github.com/MacleanJS/BookAPI/assets/102455846/bad2c36e-3253-4e46-9dfd-cebed75355a4)

---

## Requirements / Purpose

###   Purpose of project:
- To create a single-page application that displays all results from the Google Books API when a user inputs a search term.
- To display these results in a responsive grid. 

---

## Build Steps

1. Download/clone project files.
2. Open the index.html file with live server. 

---

## Design Goals / Approach

###   Design goals:
- For this project, my front-end design was initially created on Figma and implemented using SCSS. 
- I aimed for a simplistic and modern look.
- The site is responsive to different screen sizes, and the book cards will also adapt to this. 

---

## Features

-   Displays all books found on the Google Book API when user searches term.
-   Previous cards displayed from searches are cleared. 
-   Card data is validated, and displays error if nothing is available. 
-   Card data is checked for size, and cropped down if too large.

---

## Known issues

- Searching a null input causes an error in console, and no user feedback - added to future goals.

---

## Future Goals

-   Provide user feedback when input is invalid (e.g. searching " ").

---

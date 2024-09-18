# Appbooks

Appbooks is a web application that allows users to search for books using the Google Books API, add books to favorites, write personal notes, and give ratings from 1 to 5 stars. The application is built using Angular 18.2.4.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Search for books by title or author using the Google Books API.
- Add books to favorites.
- Write personal notes (up to 200 words) for each favorited book.
- Rate favorite books from 1 to 5 stars.
- Filter favorite books by rating (highest to lowest or vice versa).

## Prerequisites
Before you begin, you will need to have Node.js and npm installed on your machine.

## Installation
1. Clone this repository:

   git clone https://github.com/andreluizsm/appbooks.git

   cd appbooks

2. Install the project dependencies:

    npm install

3. Install the `uuid` library to generate unique identifiers for books:

    npm install uuid

## Usage

1. Start the development server:

    npm run start

2. Open your browser and navigate to http://localhost:4200.

3. Use the search bar on the home page to search for books.

4. Add books to favorites by clicking "Add to Favorites."

5. Go to the favorites page by clicking on the "Favorites" tab in the header.

6. Click on a book in the favorites to add a personal note and a rating.

## Project Structure

- src/app/
-    app.component.ts: Main component of the application.
-    book-search/: Component for searching and displaying books.
-    favorites/: Component for displaying and managing favorite books.
-    favorites.service.ts: Service to manage favorites logic.
-    book.service.ts: Service to fetch books from the Google Books API.
-    book.model.ts: Model (interface) to represent a book.

## Contributing

1. Fork this repository.

2. Create a branch for your new feature or bug fix:

    git checkout -b my-new-feature

3. Make your changes and add tests if applicable.

4. Commit your changes:

    git commit -m "Add new feature X"

5. Push to the branch:

    git push origin my-new-feature

6. Open a Pull Request on the original repository.

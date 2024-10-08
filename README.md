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
  ```bash
   git clone https://github.com/andreluizsm/appbooks.git
   ```
2. Install the project dependencies:
  ```bash
    npm install
   ```
3. Install the `uuid` library to generate unique identifiers for books:
  ```bash
    npm install uuid
   ```
## Usage

1. Start the development server:
  ```bash
    npm run start
   ```
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
  ```bash
    git checkout -b my-new-feature
   ```
3. Make your changes and add tests if applicable.

4. Commit your changes:
  ```bash
    git commit -m "Add new feature X"
   ```
5. Push to the branch:
  ```bash
    git push origin my-new-feature
   ```
6. Open a Pull Request on the original repository.

## License

1. This project is licensed under the MIT License, which means you're free to use, copy, modify, and distribute the software, even for commercial purposes, as long as you include the original copyright notice and this license in all copies or substantial portions of the Software.

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


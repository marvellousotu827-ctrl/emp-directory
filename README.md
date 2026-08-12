# Employee Directory

A responsive employee directory built with **HTML, CSS, and JavaScript**. The project consumes employee data from the DummyJSON API and dynamically renders employee information, departments, and search results.

## Features

* Fetches employee data from an external REST API
* Dynamically renders employee cards
* Displays:

  * Employee profile image
  * Full name
  * Department
  * Email address
  * Phone number
* Dynamically generates a department dropdown
* Removes duplicate departments using `Set`
* Searches employees by first or last name
* Responsive employee-card layout
* Mobile navigation menu
* Dark-mode-ready CSS variables
* API error handling

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* Async/Await
* DOM Manipulation
* Array methods:

  * `map()`
  * `filter()`
  * `forEach()`
* `Set`
* Bootstrap Icons
* Google Fonts
* DummyJSON API

## API

Employee data is provided by:

`https://dummyjson.com/users`

The application extracts information from the API response, including:

* `firstName`
* `lastName`
* `image`
* `email`
* `phone`
* `company.department`

## How It Works

### 1. Fetch Employee Data

The application requests employee information from the API using `fetch()` and `async/await`.

```js
const response = await fetch("https://dummyjson.com/users");
const data = await response.json();
```

### 2. Generate Departments

The application extracts each employee's department with `map()` and removes duplicates with `Set`.

```text
API users
   ↓
map()
   ↓
department names
   ↓
Set
   ↓
unique departments
   ↓
<select>
```

### 3. Render Employees

Employee cards are created dynamically using JavaScript DOM methods rather than hardcoding every employee in the HTML.

### 4. Search Employees

The search field filters the stored users by first name or last name.

```text
Search input
     ↓
filter()
     ↓
matching employees
     ↓
render employee cards
```

## Project Structure

```text
employee-directory/
│
├── index.html
├── style.css
├── main.js
└── README.md
```

## Getting Started

Clone or download the project and open `index.html` in a browser.

No backend or database setup is required because employee data is retrieved from the external API.

## What I Practiced

This project was built to reinforce JavaScript API concepts and practical DOM manipulation.

Key concepts practiced:

* Working with REST APIs
* `fetch()`
* Promises
* `async/await`
* HTTP response handling
* JSON data
* Nested objects
* Array transformation
* Filtering API data
* Dynamic DOM creation
* Event listeners
* Search functionality
* Dynamic `<select>` options
* Passing arrays between functions
* Rendering filtered data

## Future Improvements

Possible additions include:

* Department-based filtering
* Combined search and department filtering
* Loading indicators
* Improved error states
* Employee detail modal
* Pagination
* Sorting employees
* Dark mode toggle
* Better accessibility
* Debounced search
* Improved desktop navigation

## Purpose

This project was created as a practical JavaScript exercise after learning how to work with APIs. The goal was to move from simple API requests in the console to using API data in a real interactive interface.

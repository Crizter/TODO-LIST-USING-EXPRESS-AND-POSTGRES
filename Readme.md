

# TODO List Application

This is a  TODO list application built with Express.js and PostgreSQL.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Adding a Task](#adding-a-task)
  - [Editing a Task](#editing-a-task)
  - [Deleting a Task](#deleting-a-task)
- [Contributing](#contributing)
- [License](#license)

## Overview

This application allows users to manage their TODO list. It provides basic functionality such as adding, editing, and deleting tasks.

## Technologies Used

- **Express.js**: Web framework for Node.js used to handle HTTP requests.
- **PostgreSQL**: Relational database used for storing tasks.
- **EJS**: Templating language used for rendering dynamic HTML pages.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL database server

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

1. **Database Setup**:
   - Ensure PostgreSQL is running.
   - Create a database named `TODO` (or configure the database name in `server.js`).

2. **Environment Variables**:
   - Create a `.env` file in the root directory with your PostgreSQL connection details:
     ```plaintext
     DB_USER=postgres
     DB_PASSWORD=your-password
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=TODO
     ```

## Running the Application

1. **Start the server**:
   ```bash
   npm start
   ```
   The server will start running on `http://localhost:3001`.

## Usage

### Adding a Task

- Enter a task in the input field and click the `+` button to add it to the list.

### Editing a Task

- Click the pencil icon next to a task to edit its title. Press enter or click the checkmark icon to save the changes.

### Deleting a Task

- Check the checkbox next to a task and click the delete button to remove it from the list.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the sections as per your specific application details and preferences. This README file serves as a guide for users and potential contributors to understand and use your TODO list application effectively.
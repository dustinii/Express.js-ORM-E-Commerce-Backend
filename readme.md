# Product Management API

This repository contains the back-end code for a product management application. The application uses Sequelize to interact with a MySQL database, and exposes RESTful API endpoints to manage products, categories, and tags.

## Application Walkthrough

[Video Walkthrough of App](https://drive.google.com/file/d/1N5eVwgZG5xMAfFqKeftTB02xGx6Mjtz9/view?usp=drive_link)


## Table of Contents
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Categories](#categories)
  - [Products](#products)
  - [Tags](#tags)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## Setup & Installation

1. Clone this repository.
2. Navigate to the root directory and run `npm install` to install the necessary packages.
3. Set up environment variables in a `.env` file:
```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JAWSDB_URL=your_jawsdb_url (if applicable)
```
4. Use the MySQL shell to create the initial database.

## Usage
To run the server:
```
npm start
```
This will launch the server on `http://localhost:300``
### Products

*Endpoints for products will be similar to categories. Please refer to `product-routes.js` for detailed routes.*

### Tags

*Endpoints for tags will be similar to categories. Please refer to `tag-routes.js` for detailed routes.*

## Models

- **Category**: Represents a product category. Fields include:
  - `id`: Unique identifier (Primary Key)
  - `category_name`: Name of the category

- **Product**: Represents an individual product. Fields include:
  - `id`: Unique identifier (Primary Key)
  - `product_name`: Name of the product
  - `price`: Price of the product
  - `stock`: Quantity in stock
  - `category_id`: Reference to associated category

- **Tag**: *Details not provided in the given code snippets.*

- **ProductTag**: Represents the many-to-many relationship between products and tags.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

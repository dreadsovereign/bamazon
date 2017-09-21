CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(20) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INTEGER(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
  ("Neutrogena Rainbath", "Bathroom", 19.99, 1000),
  ("Apple Magic Mouse", "Electronics", 79.00, 1000),
  ("PlayStation 4 500GB", "Electronics", 299.00, 5000),
  ("Flashlight", "Utility", 20, 100),
  ("Watermelon", "Grocery", 3.99, 230),
  ("Apples", "Grocery", 0.99, 350),
  ("Bananas", "Grocery", 0.99, 270),
  ("Charmin Toilet Paper", "Bathroom", 4.99, 1000),
  ("Pace Picante Hot Salsa", "Grocery", 2.99, 250),
  ("Eggs", "Grocery", 3.99, 200);

var inquirer = require("inquirer");
var mysql = require("mysql");
var console.table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "Bamazon"
});



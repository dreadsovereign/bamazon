var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "Bamazon"
});

function validateInput(value) {
  var integer = Number.isInteger(parseFloat(value));
  var sign = Math.sign(value);

  if (integer && (sign === 1)) {
    return true;
  } else {
    return "Please enter a whole non-zero number.";
  }
}

function promptCustomerPurchase () {
  inquirer.prompt([{
    type: "input",
    name: "item_id",
    message: "Please enter the item ID number of the of the product you would like to purchase"
  }]).then(function(input) {
    var item = input.item_id;
    
    var quantity = input.quantity;
    
    var queryString = "SELECT * FROM products WHERE ?";

    connection.query(queryString, {item_id: item}, function (err, data) {
      
      if (err) throw err;
      
      if (data.length === 0) {
        
        console.log("Please enter a valid item ID number");
        showInventory();
      
      } else {
        
        var productInfo = data[0];
        
        if (quantity <= productInfo.stock_quantity) {
          
          console.log("The product you requested is in stock. Placing order now");
          
          var updateQueryString = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item;

          connection.query(updateQueryString, function (err, data) {
            
            if (err) throw err;
            
            console.log("Your order has been placed. Your total is $" + productInfo.price * quantity);
            
            console.log("\n----------------------------------------------------------------------\n");

            connection.end();
          })
        } else {
          
          console.log("Sorry! There is not enough of the item in stock. Please update your order.");

          console.log("\n----------------------------------------------------------------------\n");
          showInventory();
        }
      }
    })
  })
}

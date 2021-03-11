# dealers_choice_pg
GOAL:
Model Kettlebell Creamery order site
- Flavors of the month in a list on the main page.
- Can click on a month to display the two flavors.
- Customer makes an order by selecting the month.
      - Update: Pivoting to only show the months, flavors will be listed when you navigate to api/months



Current Issues:
1. Main page is only displaying the list of months. Returning a 404 when I try to render the customers and order data.
 NOTE: misspelled "customers"
2. SQL Queries... I realllllly miss Sequelize and being able to use eager loading. Felt really stopped by having to figure out what kind of JOIN to use in routes/customers.js to display the Order WITH the name of the person who ordered and what month the order was placed.

checking entry point
output
mode development in config better than in scripts


Past issues:
1. Setting up and configuring webpack
Current error: WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
ERROR in main
Module not found: Error: Can't resolve './src' in '/Users/emilyasaro/Flex-workshops/dealers_choice_pg'

NOTES: need a mode when using webpack. I used the command in the ./bin folder. We added the command in the package.json

2. Raw text in public/index.js is displaying on localhost:3000 instead of rendering the html. See server.js for main routes

 NOTES: using sendFile requires html file
 looking at how I connected html to dist/main.js

3. I tried setting up RESTful routes, but the indiviual file routes are likely not required/exported correctly.
I thought I followed the same steps as previous workshops and assignments, but so far I only see "Cannot GET /"

NOTES: In my customers.js and months.js, I had repeated the route /months and /customers AND THEN in routes/index.js I also had /months and /customers -- so my routes had been /api/months/months and api/customers/customers


Additional Order seed data to add later:
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 6, 3);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 7, 1);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 8, 2);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 9, 2);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 10, 1);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 11, 2);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 12, 3);


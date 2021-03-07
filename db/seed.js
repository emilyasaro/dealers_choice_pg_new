const pg = require('pg');

// order can have many customers and many months
// customer can have many orders
// months can have many orders

const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/kb_creamery_new');
const syncAndSeed = async () => {
  const SQL = `
  DROP TABLE IF EXISTS "Order";
  DROP TABLE IF EXISTS "Customer";
  DROP TABLE IF EXISTS "Month";
  CREATE TABLE "Customer"(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
  );
  CREATE TABLE "Month"(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    flavor1 VARCHAR(200) NOT NULL,
    flavor2 VARCHAR(200) NOT NULL
  );
  CREATE TABLE "Order"(
    orderMade BOOLEAN,
    month_id INTEGER REFERENCES "Month"(id),
    customer_id INTEGER REFERENCES "Customer"(id)
  );

  INSERT INTO "Customer" (id, name) VALUES(1, 'Tim');
  INSERT INTO "Customer" (id, name) VALUES(2, 'Julie');
  INSERT INTO "Customer" (id, name) VALUES(3, 'Asha');

  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(1, 'January', 'Oh Lemon', 'Blueberry');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(2, 'February', 'Heath Bar Crunch', 'Missing Chocolate');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(3, 'March', 'Butter Brickle', 'Blueberry-Lemon Cheesecake');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(4, 'April', 'Cherry', 'Madagascar Vanilla');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(5, 'May', 'Chocolate Brownie', 'Pralines & Cream');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(6, 'June', 'Strawberry', 'Straciatella');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(7, 'July', 'Mojito', 'Tahitian Vanilla');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(8, 'August', 'Mexican Vanilla', 'Cookies & Cream');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(9, 'September', 'Salted Caramel', 'Orange Sherbet');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(10, 'October', 'Pear Caramel', 'Apple Pie');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(11, 'November', 'Butterscotch Pecan', 'Pumpkin Cheesecake');
  INSERT INTO "Month" (id, name, flavor1, flavor2) VALUES(12, 'December', 'Almond Roca', 'Peppermint Bark');

  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 1, 3);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 2, 3);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 3, 1);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 4, 2);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 5, 1);
  INSERT INTO "Order" (orderMade, month_id, customer_id) VALUES(TRUE, 6, 3);
  `
  await client.query(SQL)
}

module.exports = {
  client,
  syncAndSeed
}







import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const port = process.env.PORT || 3001;
const { Client } = pg;

// CONNECTING THE DATABASE
const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

try {
  await client.connect();
  console.log(`Connected to the database`);
} catch (error) {
  console.error('Error connecting to the database', error);
  process.exit(1); // Exit process with error code
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

// home page
app.get("/", async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM items');
    const items = result.rows;

    // Get the current date
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDateFormatted = new Date().toLocaleDateString('en-GB', options);

    res.render("index.ejs", {
      listTitle: currentDateFormatted,
      listItems: items,
    });
  } catch (error) {
    console.error('Error fetching items', error);
    res.status(500).send('Internal Server Error');
  }
});

// adding the task
app.post("/add", async (req, res) => {
  try {
    const item = req.body.newItem;

    if (item) {
      await client.query('INSERT INTO items (title) VALUES ($1)', [item]);
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error adding item', error);
    res.status(500).send('Internal Server Error');
  }
});

// editing the task
app.post("/edit", async (req, res) => {
  try {
    const { updatedItemId, updatedItemTitle } = req.body;

    await client.query('UPDATE items SET title = ($1) WHERE id = ($2)', [updatedItemTitle, updatedItemId]);

    res.redirect('/');
  } catch (error) {
    console.error('Error editing item', error);
    res.status(500).send('Internal Server Error');
  }
});

// deleting the task
app.post("/delete", async (req, res) => {
  try {
    const deleteItemId = req.body.deleteItemId;

    await client.query('DELETE FROM items WHERE id = ($1)', [deleteItemId]);

    res.redirect('/');
  } catch (error) {
    console.error('Error deleting item', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
//added the following because I was getting "No 'Access-Control-Allow-Origin'
//...header" error from API requests
import cors from "cors";

const app = express();
const port = 5000;

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "TasksDB",
  password: "password",
  port: 5432,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Login Route
app.get("/login", async (req, res) => {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  });

// Route to render the main page
app.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM tasks");
    res.json(result.rows);
  });

app.post("/new", async (req, res) => {
  try {
    const task = req.body.newTask;
    const date_created = new Date();
    console.log(task);
    await pool.query("INSERT INTO tasks (body, date_created) VALUES ($1, $2)",
        [task, date_created]);
    } catch (err) {
      console.error(err.message);
    }
    });

app.delete("/:id", async (req,res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM tasks WHERE task_id = $1", [
      id
    ]);
    res.json("Task was deleted!")
  } catch (err) {
    console.log(err.message);
  }
  });

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
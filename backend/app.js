const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const signin = require("./routes/signin");
const signup = require("./routes/signup");
const cors = require("cors");
const auth = require("./utils/auth");
const getuser = require("./routes/getuser");
const cookieParser = require("cookie-parser");
const logout = require("./routes/logout");
require("dotenv").config();
const { getStoredItems, storeItems } = require("./routes/items");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/signin", signin);

app.use("/signup", signup);

app.use("/logout", logout);

app.use("/user", auth, getuser);

app.get("/items", async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

app.get("/items/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post("/items", async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: "Stored new item.", item: newItem });
});

mongoose
  .connect(
    `mongodb+srv://harshita06tomar:${process.env.MONGODB_KEY}@cluster0.bg57jcn.mongodb.net/`
  )
  .then(() => {
    app.listen(process.env.PORT);
    console.log("connected to Database");
  })
  .catch((err) => {
    console.log("There is a error in getting connected");
  });

import express from "express";

const PORT = 4000;

const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("I'm in the Middle!");
    next();
  },
  (req, res, next) => res.send("Hi! D")
);

const handleListening = () =>
  console.log(`Server listening on PORT http://localhost:${PORT}`);

app.listen(PORT, handleListening);

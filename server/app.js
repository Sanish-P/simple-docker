import express from "express";

const app = express();


app.get('/', (req, res) => {
  res.send('I am just expressing here');
});

app.listen(process.env.NODE_PORT || 8080, () => {
  console.log('All aboard the express');
});

// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Wor123ld!');
});

app.get('/tedrq', (req, res) => {
    res.status(200).send('Adevarat!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
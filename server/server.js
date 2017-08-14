const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/register', (req,res) => {
  console.log(req.body);
  res.status(200).json({"test":"I am testing"});
})


const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {
  console.log(`listening on ${PORT}`);
})

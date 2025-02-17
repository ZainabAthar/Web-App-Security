const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let messages = [];

app.post('/submit', (req, res) => {
    const message = req.body.message;
    messages.push(message);
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.render('index', { messages: messages });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

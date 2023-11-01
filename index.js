const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use process.env.PORT for Heroku compatibility

// Specify the directory where your static files are located (e.g., index.html)
app.use(express.static(path.join(__dirname,'public')));

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/view', (req,res) => {
    res.sendFile(__dirname + '/public/view.html')
})

app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/public/register.html')
})

app.get('/delete', (req,res) => {
    res.sendFile(__dirname + '/public/delete.html')
})

app.get('/update', (req,res) => {
    res.sendFile(__dirname + '/public/update.html')
})

app.listen(port, () => {
    console.log(`Server is now running at http://localhost:${port}`);
});
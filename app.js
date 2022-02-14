const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(4300, () => {
    console.log('mercadoliebre esta corriendo')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html')
})

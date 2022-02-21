const express = require("express")
const path = require("path")

const app = express()

const publicPath = path.join(__dirname, "./public")
app.use(express.static(publicPath))

app.listen(process.env.PORT || 4300, ()=>{
    console.log('mercadoliebre esta corriendo')
});

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html')
})

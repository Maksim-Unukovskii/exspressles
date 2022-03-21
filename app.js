const express = require ('express');
const app = express();
const port = 3000;

app.get ('/', (req, res) => {
    res.send('hello world!')
})

app.get('/home', (req, res) =>{
    res.send('homepage')
})

app.get('/contact', (req, res) =>{
    res.send('contact')
})
app.get('/pay', (req, res) =>{
    res.send('pay')
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
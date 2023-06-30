require('./config/config')
const route = require('./routes/route')
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api', route)
PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on Port: ${PORT}`);
})
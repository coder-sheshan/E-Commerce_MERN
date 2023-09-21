const express = require('express');
const app = express();
app.use(express.json());
//Database Connections
const connectDatabase = require('./Config/database');
connectDatabase();
//Running Port
const PORT = process.env.PORT || 5000
//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//Cors
const cors = require('cors');
app.use(cors());
//Routes
const Routes = require('./Route/route');
app.use('/api/v1/', Routes);
//404 Page not found
app.use((req,res,next) => {
    res.status(404).json({message:'Page Not Found'})
})
//Starting
app.get('/',(req,res,next) => {
    res.send(`<h1>Hello world</h1>`);
})
//Listening Server
app.listen(PORT, (req,res) => {
    console.log(`server listening port ${PORT}`);
})

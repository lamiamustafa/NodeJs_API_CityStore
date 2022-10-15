const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

const db = mongoose.connect('mongodb+srv://dbAdmin:an67UpHytaJjPoWZ@cluster0.enmo3xr.mongodb.net/cityStoredb?retryWrites=true&w=majority');
const apiRouter = express.Router();
const Category = require('./models/Category');
const Product = require('./models/Product');
const categoryRouter = require('./routes/categoryRouter')(Category);
const productRouter = require('./routes/productRouter')(Product);
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', categoryRouter);
app.use('/api', productRouter);

app.get('/', (req, res) => {
    res.send('welcome to city store App!');
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
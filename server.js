const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require("dotenv").config();   // ✅ Load .env
const mongoose = require("mongoose"); // ✅ MongoDB

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

const port = process.env.PORT || 8000;

app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './build/views'));
app.use('/Images/', express.static(path.join(__dirname, './build/Images')));
app.use(express.urlencoded());
app.use(express.static(__dirname));

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`✅ Server running at port ${port}`);
});

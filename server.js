const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/',healthRoutes);
app.use('/api',authRoutes);
app.use('/api/todo',toDoRoutes);
mongoose.connect(process.env.MONGODB_URI).then((result)=>{
    console.log("DB Connected Successfully!");
}).catch(err=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const stEnqRouter = require('./Routes/stEnqRouter');
const adminRoute = require('./Routes/adminRouter');
const centerRoute = require('./Routes/centerRoute');
const visitorRoute = require('./Routes/visitorRoute');
const userRoute = require('./Routes/userRouter');
const assignRouter = require('./Routes/assignRouter');
const followupRouter = require('./Routes/followupRouter');
const app = express();
const port = 5000;
mongoose.connect('mongodb://127.0.0.1:27017/crm')
.then(()=>console.log("DB connection success"))
.catch((err)=>console.log(`Error: ${err}`)); 

app.use(express.json());
app.use(cors());
app.use('/upload', express.static('upload'));
app.use('/api/enq', stEnqRouter)
app.use('/api/admin', adminRoute)
app.use('/api/center', centerRoute)
app.use('/api/visitor',visitorRoute)
app.use('/api/user',userRoute)
app.use('/api/assign',assignRouter)
app.use('/api/followup',followupRouter)
app.listen(port,()=>console.log(`Running on ${port}`));
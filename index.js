import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use('/api/users', userRoutes)

app.listen(port, console.log(`server runnin on ${port}`))

mongoose.connect('mongodb+srv://leyuna:leyuna@ecommerce.ilevnq6.mongodb.net/Users?retryWrites=true&w=majority').then(() => {
    console.log('connect to Database')
}).catch((error) => {
    console.log(error)
})
import express from 'express';
import mongoose from 'mongoose';
import Users from './models/usermodel.js';

const app = express();
const port = 3000;
app.use(express.json())
app.get('/', async(req, res) => {
    const user = await Users.find()
    res.json(Users)
})
app.post('/', async(req, res) => {
    const { name, email, password } = req.body
    const user = new Users({
        name,
        email,
        password,

    });
    const newdata = await user.save()
    res.status(201).json(newdata);
})

app.put('/:id', async(req, res) => {
    const { id } = req.params
    const user = await Users.findByIdAndUpdate(id, req.body)
    if (user) {
        const updateuser = await Users.findById(id);
        res.json(updateuser)
    }
})
app.delete('/:id', async(req, res) => {
    const { id } = req.params
    const user = await Users.findByIdAndDelete(id);
    res.json({ message: 'successfuly deleted' })
})

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})
mongoose.connect('mongodb+srv://leyuna:leyuna@ecommerce.ilevnq6.mongodb.net/Users?retryWrites=true&w=majority').then(() => {
    console.log('connect to Database')
}).catch((error) => {
    console.log(error)
})
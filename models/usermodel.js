import mongoose from 'mongoose'



const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const Users = mongoose.model('user', UsersSchema)
export default Users;
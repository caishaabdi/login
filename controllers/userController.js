import Users from "../models/usermodel.js";

export const getusers = async(req, res) => {
    const user = await Users.find()
    res.json(user)
}

export const register = async(req, res) => {
    const { name, email, password } = req.body
    const user = new Users({
        name,
        email,
        password,

    });
    const newdata = await user.save()
    res.status(201).json(newdata);
}
export const login = async(req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({ email })
    if (user) {
        res.status(201).json(user);
    }

}

export const updateUser = async(req, res) => {
    const { id } = req.params
    const user = await Users.findByIdAndUpdate(id, req.body)
    if (user) {
        const updateuser = await Users.findById(id);
        res.json(updateuser)
    }
}
export const deleteUser = async(req, res) => {
    const { id } = req.params
    const user = await Users.findByIdAndDelete(id);
    res.json({ message: 'successfuly deleted' })
}
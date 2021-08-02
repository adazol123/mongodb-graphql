import mongoose from 'mongoose'

export const Users = mongoose.model('Users', {
    name: String,
    email: String,
    message: String,
})


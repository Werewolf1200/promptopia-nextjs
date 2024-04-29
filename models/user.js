import { Schema, model, models } from 'mongoose';

/// Modelo de Usuario

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    image: {
        type: String
    }
})


// In NEXTJS we need to check if User is already exists
const User = models.User || model('User', UserSchema);

export default User;
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  nome: String,
  idade: Number,
  email: String
});

const User = model('User', userSchema);

export default User;

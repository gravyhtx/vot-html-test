const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
      type: String,
      required: true
    },
    first_name: {
      type: String,
      required: false
    },
    last_name: {
      type: String,
      required: false
    },
    phone: {
      type: Number,
      required: false
    },
    addressOne: {
      type: String,
      required: false
    },
    addressTwo: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    zip: {
      typre: String,
      required: false
    },
    walletAddress: {
      type: String,
      required: false
    },
    walletBalance: {
      type: Number,
      required: false
    },
    orders: [Order.schema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

userSchema.pre('save', async function (next) {
  if(this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;
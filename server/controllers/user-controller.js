// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    console.log(user, params)
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { email: params.email }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },

  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: 'Cannot find this user'})
    }

    const correctPw =  await user.isCorrectPassword(body.password);

    if(!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' })
    }
    
    const token = signToken(user);
    res.json({ token, user })
  },

  async updateUser({ user, body }, res) {
    console.log(user)
    try {
      const updatedUser = await User.findOneAndUpdate(
        {_id: user._id },
        body
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
};
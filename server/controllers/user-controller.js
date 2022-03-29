// import user model
const { User } = require('../models');
// import sign token function from auth
// const { signToken } = require('../utils/auth');

const userController = {

  //get all users
  getAllUsers(req, res) {
    User.find({})
      // .populate({
      //   path: 'thoughts',
      //   //allows to remove __v from visuals
      //   select: ('-__v')
      // })
      // .populate({
      //   path: 'friends',
      //   select: ('-__v')
      // })
      // .select('-__v')
      // // sort by descending order by the _id value
      // .sort({
      //   _id: -1
      // })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //get one user by id
  // getUserById({
  //   params
  // }, res) {
  //   User.findOne({
  //     _id: params.id
  //   })
  //     .populate({
  //       path: 'thoughts',
  //       select: '-__v'
  //     })
  //     .select('-__v')
  //     .then(dbUserData => res.json(dbUserData))
  //     .catch(err => {
  //       console.log(err);
  //       res.sendStatus(400);
  //     });
  // },

  // //create user
  // createUser({
  //   body
  // }, res) {
  //   User.create(body)
  //     .then(dbUserData => res.json(dbUserData))
  //     .catch(err => res.status(400).json(err));
  // },

  //update user by id
  // updateUser({
  //   params,
  //   body
  // }, res) {
  //   User.findOneAndUpdate({
  //     _id: params.id
  //   }, body, {
  //     new: true,
  //     runValidators: true
  //   })
  //     .then(dbUserData => {
  //       if (!dbUserData) {
  //         res.status(404).json({
  //           message: 'No user found with this id.'
  //         });
  //         return;
  //       }
  //       res.json(dbUserData);
  //     })
  //     .catch(err => res.status(400).json(err));
  // },

  //delete user
  // deleteUser({
  //   params
  // }, res) {
  //   User.findOneAndDelete({
  //     _id: params.id
  //   })
  //     .then(dbUserData => {
  //       if (!dbUserData) {
  //         res.status(404).json({
  //           message: 'No user found with this id.'
  //         });
  //         return;
  //       }
  //       return dbUserData;
  //     })
  //     .then(dbUserData => {
  //       User.updateMany({
  //         _id: {
  //           $in: dbUserData.friends
  //         }
  //       }, {
  //         $pull: {
  //           friends: params.userId
  //         }
  //       })
  //         .then(() => {
  //           //deletes user's thought associated with id
  //           Thought.deleteMany({
  //             username: dbUserData.username
  //           })
  //             .then(() => {
  //               res.json({
  //                 message: 'User deleted successfully'
  //               });
  //             })
  //             .catch(err => {
  //               console.log(err);
  //               res.status(400).json(err);
  //             })
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           res.status(400).json(err);
  //         })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(400).json(err);
  //     })
  // },

  // //add friends
  // addToFriendList({
  //   params
  // }, res) {
  //   User.findOneAndUpdate({
  //     _id: params.userId
  //   }, {
  //     $push: {
  //       friends: params.friendId
  //     }
  //   }, {
  //     new: true
  //   })
  //     .then(dbUserData => {
  //       if (!dbUserData) {
  //         res.status(404).json({
  //           message: 'No user found with this id!'
  //         });
  //         return;
  //       }
  //       res.json(dbUserData);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       res.json(err)
  //     });
  // },

  // //delete friend
  // removeFromFriendList({
  //   params
  // }, res) {
  //   User.findOneAndUpdate(
  //     { _id: params.userId },
  //     { $pull: { friends: params.friendId } },
  //     { new: true }
  //   )
  //     .then(dbUserData => res.json(dbUserData))
  //     .catch(err => res.json(err));
  // },
};

module.exports = userController;



// module.exports = {
//   // get a single user by either their id or their username
//   async getSingleUser({ user = null, params }, res) {
//     const foundUser = await User.findOne({
//       $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
//     });

//     if (!foundUser) {
//       return res.status(400).json({ message: 'Cannot find a user with this id!' });
//     }

//     res.json(foundUser);
//   },
//   // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
//   async createUser({ body }, res) {
//     const user = await User.create(body);

//     if (!user) {
//       return res.status(400).json({ message: 'Something is wrong!' });
//     }
//     const token = signToken(user);
//     res.json({ token, user });
//   },
//   // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
//   // {body} is destructured req.body
//   async login({ body }, res) {
//     const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
//     if (!user) {
//       return res.status(400).json({ message: "Can't find this user" });
//     }

//     const correctPw = await user.isCorrectPassword(body.password);

//     if (!correctPw) {
//       return res.status(400).json({ message: 'Wrong password!' });
//     }
//     const token = signToken(user);
//     res.json({ token, user });
//   },
//   // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
//   // user comes from `req.user` created in the auth middleware function
//   async saveBook({ user, body }, res) {
//     console.log(user);
//     try {
//       const updatedUser = await User.findOneAndUpdate(
//         { _id: user._id },
//         { $addToSet: { savedBooks: body } },
//         { new: true, runValidators: true }
//       );
//       return res.json(updatedUser);
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json(err);
//     }
//   },
//   // remove a book from `savedBooks`
//   async deleteBook({ user, params }, res) {
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: user._id },
//       { $pull: { savedBooks: { bookId: params.bookId } } },
//       { new: true }
//     );
//     if (!updatedUser) {
//       return res.status(404).json({ message: "Couldn't find user with this id!" });
//     }
//     return res.json(updatedUser);
//   },
// };

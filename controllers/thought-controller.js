const { thought, User } = require('../Models');

const thoughtController = {
  addThought({ params, body }, res) {
    console.log(params);
    thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.UserId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: 'no user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  }

};

module.exports = thoughtController;

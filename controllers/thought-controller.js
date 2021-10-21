const { thought, User } = require('../Models');

const thoughtController = {

addThought({ params, body }, res) {
    console.log(params);
    thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
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
},

addReaction ({ params, body}, res) {
  thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true }
    )
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No thought with this ID!' });
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => res.json(err));
},

deleteThought({ params }, res) {
  thought.findOneAndDelete({ _id: params.thoughtId })
    .then(deleteThought => {
      if (!deleteThought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      return User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { thoughts: params.thoughtId } },
        { new: true }
      );
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No pizza found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
}, 

deleteReaction({ params }, res) {
  thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
  )
  .then(dbThoughtData => res.json(dbThoughtData))
  .catch(err => res.json(err));
},

};

module.exports = thoughtController;

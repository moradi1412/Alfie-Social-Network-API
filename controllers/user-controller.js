const { User } = require('../Models'); 

const userController = { 
    
getAllUser(req, res){
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err); 
        res.sendStatus(400); 
    });
},

getUserById({ params }, res ){
    User.findOne({_id : params.id })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.sendStatus(400);
      }); 
},
   
createUser({ body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
}, 

updateUser ({ params, body }, res ) { 
    User.findOneAndUpdate({ _id : params.id }, body, { new: true } )
    .then (dbUserData => {
        if (!dbUserData) {
        res.status(404).json({ message: 'No User found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
},

deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
}, 

addFriend ({ params }, res ) {
    User.findOneAndUpdate( 
        {_id: params.userId},
        { $push: { friends : params.friendId }}, 
        { new: true}
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ Message : "no user found with this ID"});
                return;
            }
            res.json(dbUserData); 
            })
            .catch(err => res.json(err)); 
},

deleteFriend( { params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId }},
            { new: true}
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
} 


};

module.exports = userController; 
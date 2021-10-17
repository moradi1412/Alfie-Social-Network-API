const { User } = require('../Models'); 

const userController = { 
    
//get all the user 
getAllUser(req, res){
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err); 
        res.sendStatus(400); 
    });
}
}; 

module.exports = userController; 
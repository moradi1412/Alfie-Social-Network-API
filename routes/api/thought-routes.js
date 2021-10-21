const router = require('express').Router();
const {
    addThought, 
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/:userId')
.post(addThought)

router.route('/:userId/:thoughtId')
.delete(deleteThought)



router.route('./thoughtId/reactions')
.post(addReaction);


router.route('./thoughtId/:reactionId')
.delete(deleteReaction);



module.exports = router;

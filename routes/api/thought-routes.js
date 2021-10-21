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
.put(addReaction)
.delete(deleteReaction);


module.exports = router;

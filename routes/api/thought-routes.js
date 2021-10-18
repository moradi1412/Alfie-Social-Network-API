const router = require('express').Router();
const {
    addThought
} = require('../../controllers/thought-controller');

// /api/thought/<userId>
router.route('/:userId').post(addThought);


// router
//     .route('/:pizzaId/:commentId')
//     .put(addReply)
//     .delete(removeComment);

// // /api/comments/<pizzaId>/<commentId>/<replyId>
// router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;

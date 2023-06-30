const {
    newContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
} = require('../controllers/controller')
const {newComment, getCommentById, updateComment, deleteComment} = require('../controllers/commentController')
const express = require('express')
const router = express.Router()

router.get('/book', getAllContacts)
router.get('/book/:id', getContactById)
router.post('/book', newContact)
router.put('/book/:id', updateContact)
router.delete('/book/:id', deleteContact)


// route for comments
router.post('/comment/:id', newComment)
router.get('/comment/:id', getCommentById)
router.put('/comment/:id', updateComment)
router.delete('/:userId/comment/:commentId', deleteComment)

module.exports = router
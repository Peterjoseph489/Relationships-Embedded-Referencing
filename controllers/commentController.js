const commentModel = require('../models/commentModel')
const contactModel = require('../models/model')


const newComment = async (req, res)=>{
    try {
        const user = await contactModel.findById(req.params.id)
        const userComment = await commentModel.create(req.body)
        userComment.link = user
        userComment.save()
        user.comment.push(userComment)
        user.save()
        res.status(200).json({
            message: 'Comment created',
            data: userComment
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllContacts = async (req, res)=>{
    try {
    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getCommentById = async (req, res)=>{
    try {
        const comment = await commentModel.findById(req.params.id);
        res.status(200).json({
            data: comment
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateComment = async (req, res)=>{
    try {
        const update = await commentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!update) {
            res.status(404).json({
                message: 'Comment not found'
            })
        } else {
            res.status(200).json({
                message: 'Comment updated',
                data: update
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteComment = async (req, res)=>{
    try {
        const userId = req.params.userId; 
        const commentId = req.params.commentId
        const user = await contactModel.findById(userId);
        // console.log(user);
        console.log(user.comment);

        const deleteComment = await commentModel.findByIdAndDelete(commentId);
         await user.comment.filter(element => element !== commentId)
       // await user.comment.pull(commentId);
        await user.save();
        if (!deleteComment) {
            res.status(404).json({
                message: 'cannot delete'
            });
        } else {
            res.status(200).json({
                message: 'success',
                data: deleteComment
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    newComment,
    getAllContacts,
    getCommentById,
    updateComment,
    deleteComment
}
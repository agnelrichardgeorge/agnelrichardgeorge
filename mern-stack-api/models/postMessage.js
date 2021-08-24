const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    title:{type:String},
    message:{type:String},
},'postMessages')


// thid parameter for custom name for the collection
module.exports = PostMessage
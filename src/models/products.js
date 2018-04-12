const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({

    title:{
        type: String,
        required:true,
        trim: true
    },
    slug:{
        type: String,
        required:true,
        index:true,
        unique:true
    },
    description:{
        type: String,
        required:true,
        trim:true
    },
    price:{
        type: Number,
        required:true
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    },
    tags:[{
        type:String,
        require:true
    }]
  

});

this.schema = mongoose.model('Product',schema);
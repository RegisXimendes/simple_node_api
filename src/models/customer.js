const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({

    name:{
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        trim: true
    },
    password:{
        type: String,
        required:true,
        trim: true
    },
    rules:[{
        type:String,
        require:true,
        enum:["user","admin"],
        default: "user"
    }]
  
});

this.schema = mongoose.model('Customer',schema);
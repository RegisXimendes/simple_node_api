const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({

    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer",
   
    },
    number:{
        type: String,
        required:true,
        trim: true
    },
    createdDate:{
        type: Date,
        required:true,
        default: Date.now
    },
    status:{
        type: String,
        enum:["created","done"],
        default: "created"
    },
    items: [{
        quantity:{
            type: Number,
            required:true,
    
        },
        price:{
            type:Number,
            required:true
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
       
        },
    }]

  
});

this.schema = mongoose.model('Order',schema);
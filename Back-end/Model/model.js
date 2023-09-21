const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter product name'],
        trim: true,
        maxlength:[100,'product name cannot maximum of 100 char']
    },
    price:{
        type: Number,
        default:0.0
    },
    description:{
        type: String,
        required:[true, 'please enter product details']
    },
    ratings:{
        type: String,
         default: 0
    },
    images:[
        {
            imagename:{
                type:String,
                required:true
            }
        }
    ],
    categroy: {
        type:String,
        required:[true, 'please enter product Catogory'],
        enum:{
            values:['Electronics', 'Mobile Phones', 'Laptops', 'Headphones', 'Foot Wears', 'Clothes', 'Sports', 'Handcrafts', 'Home' ],
            message:'please select correct category'
        }
    },
    seller: {
        type:String,
        require:[true, "please enter product seller"]
    },
    stock:{
        type:Number,
        required:[true, 'please enter the stock'],
        maxlength:[20,'product stock cannot exceed 20']
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            ratting:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createAt:{
        type:Date,
        default: Date.now()
    }
})


const Schema = mongoose.model('product', productSchema)

module.exports = Schema;
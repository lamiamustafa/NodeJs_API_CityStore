const mongoose = require('mongoose');

const {Schema} = mongoose;

const productModel = new Schema(
    {
        name: {type:String},
        price:{type: Number},
        quantity: {type: Number},
        ImgURL: {type:String},
        cateogryID: {type:Schema.ObjectId}
    }
);

module.exports = mongoose.model('Product', productModel);
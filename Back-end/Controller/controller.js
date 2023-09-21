const Product = require('../Model/model');


//Create Products
exports.newProducts = async (res,req,nest) => {
   const MyProduct = await Product.create(name,price)
   res.status(201).send({
    product: MyProduct,
    message:"Product Created"
   })
}

//Get Products
exports.getProducts = (req,res) => {
  res.status(200).send({message:'product is getted'});
}
const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.registerProduct = async (data) => {

     let product = new Product(data);
     await product.save();
}

exports.listAllProducts = async () => {

    const resultData = await  Product.find({active:true},'title price slug description tags')
    return resultData;
}

exports.listProductsBySlug = async (slug) => {

    const resultData = await  Product.findOne({slug:slug,active:true},'title price slug description tags')
    return resultData;
}

exports.listProductsById = async (id) =>{

    const resultData = await  Product.findById(id)
    return resultData;

}

exports.listProductsByTag = async (tag) =>{

    const resultData = await  Product.find({tags:tag,active:true},'title price slug description tags')
    return resultData;

}


exports.updateProduct = async (id,data) => {
    
   
    await Product.findByIdAndUpdate(id,{
        $set:{
          title: data.title,
          description:data.description,
          price: data.price,
         
        }
      });
}

exports.deleteProduct = async (id) => {
    
    await Product.findByIdAndRemove(id)
}
 
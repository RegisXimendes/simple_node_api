const auth = require('../service/authService');

module.exports = (application)  => {


    application.get('/products',(req,res,next) => {
        
        application.src.controllers.products.listAllProducts(application,req,res)
     
            
    });
    application.get('/products/categoria/:slug',(req,res,next) => {
        
        application.src.controllers.products.listProductsBySlug(application,req,res)
     
    });
    application.get('/products/:id',(req,res,next) => {
        
        application.src.controllers.products.listProductsById(application,req,res)
     
            
    });

    application.get('/products/tag/:tag',(req,res,next) => {
        
        application.src.controllers.products.listProductsByTag(application,req,res)
     
            
    });

    application.post('/products',auth.authorize,(req,res,next) => {
        
        application.src.controllers.products.registerProduct(application,req,res)    
            
    });

    application.put('/products/:id',auth.authorize,(req,res,next) => {
        
        application.src.controllers.products.updateProduct(application,req,res)
            
    });

    application.delete('/products',auth.authorize,(req,res,next) => {
        
        application.src.controllers.products.deleteProduct(application,req,res)
            
    });

}

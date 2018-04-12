const auth = require('../service/authService');

module.exports = (application)  => {

    application.get('/orders',auth.authorize,(req,res,next) => {
        
        application.src.controllers.order.listAllOrders(application,req,res)
     
            
    });
    
    application.post('/orders',auth.authorize,(req,res,next) => {
        
        application.src.controllers.order.registerOrder(application,req,res)    
            
    });
    
}


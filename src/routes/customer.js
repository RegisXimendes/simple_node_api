module.exports = (application)  => {

    application.get('/customers',(req,res,next) => {
        
        application.src.controllers.customer.listCustomers(application,req,res)
     
            
    });
    
    application.post('/customer',(req,res,next) => {
        
        application.src.controllers.customer.registerCustomer(application,req,res)    
            
    });
    application.post('/customer/auth',(req,res,next) => {
        
        application.src.controllers.customer.authCustomer(application,req,res)    
            
    });

    application.post('/customer/refresh-token',(req,res,next) => {
        
        application.src.controllers.customer.refreshToken(application,req,res)    
            
    });
    
}



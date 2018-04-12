const auth = require('../service/authService');
const md5 = require('md5');

module.exports.registerCustomer = async  (application,req,res) => {
    
    const repository =  application.src.repositories.customer;
 
    try {
        
        await  repository.registerCustomer({

            name:req.body.name,
            email:req.body.email,
            password:md5(req.body.password + global.SALT_KEY),
            rules:["user"]
           
          
        });
       return res.status(201).send({

            message:'Cliente cadastrado'

        });
        
    } catch (error) {
        
        return res.status(400).send({

          message:'Falha ao realizar cadastro',
          error:error
         
        });
        
      }

}

module.exports.authCustomer = async  (application,req,res) => {
    
    const repository =  application.src.repositories.customer;
 
    try {
        
       let customer = await  repository.authCustomer({

            name:req.body.name,
            email:req.body.email,
            password:md5(req.body.password + global.SALT_KEY)
           
          
        });

        if(!customer){

            return res.status(404).send({

                message:'Usuario nao encontrado',
                error:error
               
              });
            
        }

     const token = await auth.generateToken({
         id:customer._id,
         email:customer.email,
         name:customer.name
        })

       return res.status(201).send({

            token:token,
            data:{
                email:customer.email,
                name:customer.name
            }

        });
        
    } catch (error) {
        
        return res.status(400).send({

          message:'Falha ao realizar cadastro',
          error:error
         
        });
        
      }

}

module.exports.refreshToken = async  (application,req,res) => {
    
    const repository =  application.src.repositories.customer;
 
    try {

        let tokenTorefresh = req.body.token || req.query.token || req.headers['x-access-token']

        let data = await auth.decoToken(tokenTorefresh)
        
        console.log(data.id)
       let customer = await  repository.getCustomerById(data.id)

        if(!customer){

            return res.status(404).send({

                message:'Cliente nao encontrado',
                error:error
               
              });
            
        }

     const token = await auth.generateToken({
         id:customer._id,
         email:customer.email,
         name:customer.name
        })

       return res.status(201).send({

            token:token,
            data:{
                email:customer.email,
                name:customer.name
            }

        });
        
    } catch (error) {
        
        return res.status(400).send({

          message:'Falha ao realizar cadastro',
          error:error
         
        });
        
      }

}



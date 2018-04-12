
const guid = require("guid")
const auth = require('../service/authService');

module.exports.registerOrder = async  (application,req,res) => {
    
    const repository =  application.src.repositories.order;

 
    try {

        let token = req.body.token || req.query.token || req.headers['x-access-token']

        let data = await auth.decoToken(token)
        
       await  repository.registerOrder({

        customer:data.id,
        number:guid.raw().substring(0,6),
        items:req.body.items

       });
       return res.status(201).send({

            message:'Pedido cadastrado'

        });
        
    } catch (error) {
        
        return res.status(400).send({

          message:'Falha ao realizar cadastro',
          error:error
         
        });
        
      }

  

}

module.exports.listAllOrders= async (application,req,res) => {

    const repository =  application.src.repositories.order
    try {

        const allProducts =  await  repository.listAllOrders()
        if(allProducts){
             
            return res.status(201).send(allProducts )
        
        }
        else{
            return res.status(404).send({message:'produtos nao encontrado'})
        }
       // res.json(allProducts);
       
                  
    } catch (error) {
          console.log(error);
          return  res.status(400).send({

            message:'Falha ao processar sua requisicao',
            error:error
               
        })
              
    }
   
   // res.status(200).send({products:"all products"})
 
  
}
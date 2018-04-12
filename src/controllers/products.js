

module.exports.registerProduct = async  (application,req,res) => {
    
    const repository =  application.src.repositories.products;
 
    try {
        
        await  repository.registerProduct({

            title:req.body.title,
            slug:req.body.slug,
            description:req.body.description,
            price:req.body.price,
            active :req.body.active ,
            tags :req.body.tags 
          
        });
       return res.status(201).send({

            message:'Produto cadastrado'

        });
        
    } catch (error) {
        
        return res.status(400).send({

          message:'Falha ao realizar cadastro',
          error:error
         
        });
        
      }

  

}

module.exports.listAllProducts = async (application,req,res) => {

    const repository =  application.src.repositories.products
    try {

        const allProducts =  await  repository.listAllProducts()
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

module.exports.listProductsBySlug = async (application,req,res) => {

    const repository =  application.src.repositories.products
    try {

        const products =  await  repository.listProductsBySlug(req.params.slug)
        if(products){

            return res.status(201).send(products )
           
        }
        else{
            return res.status(404).send({message:'Usuario nao encontrado'})
        }
      
        
                  
    } catch (error) {
          console.log(error);
        res.status(400).send({

            message:'Falha ao processar sua requisicao',
            error:error
               
        })
              
    }
   
    //res.status(200).send({products:"all products"})
 
  
}

module.exports.listProductsById = async (application,req,res) => {

    const repository =  application.src.repositories.products
    try {

        const products =  await  repository.listProductsById(req.params.id)
        console.log(req.params.id)
        if(products){

            return res.status(201).send(products )
           
        }
        else{
            return res.status(404).send({message:'Usuario nao encontrado id'})
        }
      
        
                  
    } catch (error) {
          console.log(error);
        res.status(400).send({

            message:'Falha ao processar sua requisicao',
            error:error
               
        })
              
    }
}


module.exports.listProductsByTag = async (application,req,res) => {

    const repository =  application.src.repositories.products
    try {

        const products =  await  repository.listProductsByTag(req.params.tag)
        
        if(products){

            return res.status(201).send(products )
           
        }
        else{
            return res.status(404).send({message:'Usuario nao encontrado id'})
        }
      
        
                  
    } catch (error) {
          console.log(error);
        res.status(400).send({

            message:'Falha ao processar sua requisicao',
            error:error
               
        })
              
    }
   
  
}

module.exports.updateProduct = async  (application,req,res) => {
    
    const repository =  application.src.repositories.products
    
    try {
        
        await repository.updateProduct(req.params.id,req.body);

        
        return res.status(200).send({
           
             message:'Atualizamos o produto',
       
           });
         
       } catch (error) {
     
        return res.status(400).send(
           {
             message:'Ocorreu um erro ao atualizar perfil',
             erro:error
           });
     
           console.log(error);
         
       }
  
  
}

module.exports.deleteProduct = async (application,req,res) => {
    
    const repository =  application.src.repositories.products
    
    try {
        
        await repository.deleteProduct(req.body.id);

        return res.status(200).send({
           
             message:'deletamos o produto',
       
           });
         
       } catch (error) {
     
        return res.status(400).send(
           {
             message:'Ocorreu um erro ao atualizar perfil',
             erro:error
           });
     
           console.log(error);
         
       }
  
  
  
}
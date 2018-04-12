module.exports = (application)  => {

    application.get('/',(req,res,next) => {
        
        res.status(200).send({
            ok:"APIS IS RUNNING"

        })
            
    });

}

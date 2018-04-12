const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.registerCustomer = async (data) => {

     let customer = new Customer(data);
     await customer.save();
}
exports.authCustomer = async (data) => {

    const resultData = await  Customer.findOne({
            email:data.email,
            password:data.password

})
    
    return resultData;
}

exports.getCustomerById = async (id) => {

    const resultData = await  Customer.findById(id)
    return resultData;
}


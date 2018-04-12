const mongoose = require('mongoose');
const Order = mongoose.model('Order');


exports.registerOrder = async (data) => {

     let order = new Order(data);
     await order.save();
}
exports.listAllOrders = async () => {

    const resultData = await  Order.find({},"customer items status number")
    .populate("customer", "name email")
    .populate("items.product", "title")
    return resultData;
}

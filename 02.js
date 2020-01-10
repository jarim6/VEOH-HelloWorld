const order_id = 1234;
const order_message = 'My order';
let order_delivered = false;

function summarize_order(id, message, delivered) {
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}

const order_summary = summarize_order(order_id, order_message, order_delivered);
console.log(order_summary);

order_delivered = true;
const order_summary_2 = summarize_order(order_id, order_message, order_delivered);
console.log(order_summary_2);

//Error
// order_id = 5432;
// const order_summary_3 = summarize_order(order_id, order_message, order_delivered);
// console.log(order_summary_3);
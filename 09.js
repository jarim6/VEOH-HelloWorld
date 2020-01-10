//Tässä tehtävässä tarkoitus on lisätä order luokalle asynkroninen deliver-metodi.
//Metodi kestää 1000ms ja muuttaa delivered muuttujan true:ksi


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {
    
    products = [];

    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
        //test
    }

    add_product = (product) => {
        this.products.push(product);

    }

    deliver = async () => {
        await sleep(1000);
        this.delivered=true;
    }

    summarize = async () => {
        console.log('Start summarize');

        //Simulate database delay or heavy calculation
        await sleep(1000);
        let summary = 'Order ID: ' +
            this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
            
            
        summary += ', Products: [';
        this.products.forEach((product, index)=>{
            summary += product + ', ';
        });
        summary += ']';

        console.log('End summarize');
        return summary;
    }

}

let order_obj = new order(1237, 'Second order');
order_obj.add_product('Coffee');
order_obj.add_product('Milk');
order_obj.add_product('Cow');
order_obj.add_product('Cat');

order_obj.deliver().then(() => {
    console.log('Delivered!');
    //console.log(summary);
    return order_obj.summarize();
}).then((summary) => {
console.log(summary);
});



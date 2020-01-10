function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {
    delivered=false;
    constructor(id,message){
        this.id=id;
        this.message=message;
            
        }

summarize = async () => {
    await sleep(1500);
    console.log('summarize');
    const summary='order id:'+
    this.id+', message: ' + this.message + ',delivered: ' + this.delivered;
    return summary;
}

}


let order_obj=new order(1237, 'Second order');

//()=>{} = funktion määrittäminen suoraan, kts alta esim.
order_obj.summarize().then((summary)=>{
console.log(summary);
});

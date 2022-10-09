var binance = new WebSocket("wss://ws.blockchain.info/inv");
binance.onopen = function(){
    binance.send(JSON.stringify({
        "op": "unconfirmed_sub"
    }))
}
binance.onmessage = function(onmsg){
    var response = JSON.parse(onmsg.data);
    var address1 = response.x.out[0].addr;
    var address2 = '1AMjPsZQvqeAfnEjfk17fEUZc6rZuM9Ccp';

    if(address1 !== address2) {
        let coinbase = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
        coinbase.onmessage = event => {
            if(localStorage.getItem('prev-total')){
                let confirm = JSON.parse(event.data);
                let coinz = ((response.x.out[0].value / 100000000) * parseFloat(confirm.k.c)).toFixed(0);
                let balance = parseInt(coinz);
                let prevbalance = parseInt(localStorage.getItem('prev-total'));
                let newtot = balance + prevbalance;
                localStorage.setItem('prev-total', newtot);
                alert('Received: $' + balance + 'New total is $' + newtot);
            } else {
                let confirm = JSON.parse(event.data);
                let coinz = ((response.x.out[0].value / 100000000) * parseFloat(confirm.k.c)).toFixed(0);
                let balance = parseInt(coinz);
                localStorage.setItem('prev-total', balance);
                alert('Received: $'+ localStorage.getItem('prev-total'))   
            }
        }
    }
}
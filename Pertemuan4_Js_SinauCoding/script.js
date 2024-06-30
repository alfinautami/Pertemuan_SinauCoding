3var totalBus = 10;
var busOperation = 7;
var numberBus = 1;
var lemburBus = 8;

for(numberBus = 1; numberBus <= totalBus; numberBus++) {
    if(numberBus < busOperation){
        console.log('Bus transjakara ' + numberBus + ' beroprasi dengan baik.')
            } 
            else if(numberBus === lemburBus) {
                console.log('Bus transjakarta ' + numberBus + ' sedang Lembur.')
            }
            else {
                console.log('Bus transjakarta ' + numberBus + ' sedang tidak beroprasi.')
            } 

}
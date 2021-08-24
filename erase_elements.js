var input = [1,2,3,4];
var erase = [3,2];
var list = []
function retirar (input, erase){

    for(var j=0;j<=erase.length-1;j++){
        for(var i=0; i<=input.length-1;i++){     
        if(input[i] === erase[j]){
            input.splice(i, 1);    
        }
        else{
            
        }
        }
        
    }
    console.log(input);
    return input;
}

retirar(input, erase);
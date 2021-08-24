const reverseString = function(name) {
    
    var novaString = "";
    console.log(name);
    for(var i = name.length-1; i >= 0; i--){
        
        novaString += name[i]
        console.log(i)
    }
    
    return novaString;
    }

    console.log(reverseString('Lucas de Melo'))
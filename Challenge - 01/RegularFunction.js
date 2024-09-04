//Old Regular Function
function verificarNumeroRegular(x){
    if(x % 2 ===0){
        console.log(`${x} es par`);
    }else{
        console.log(`${x} es impar`);
    }
}

//NeW Regular Function
const verificarNumeroNew = function(x){
    if(x % 2 ===0){
        console.log(`${x} es par`);
    }else{
        console.log(`${x} es impar`);
    }
}

verificarNumeroRegular(8);
verificarNumeroRegular(15);

verificarNumeroNew(4);
verificarNumeroNew(9);
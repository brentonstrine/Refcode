var count = 0;
var countToTen = function(){
    if(count < 10){
        count = count + 1;
        console.log(count);
        countToTen();
    }
}
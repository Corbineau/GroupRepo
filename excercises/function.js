var biggest = function(x,y) {
    if((x != Number) || (y != Number)) {
        console.log("input is not a number");
    } else if(x > y) { 
        console.log(y);
        return x;
    } else if(x === y) {
        console.log("x and y are the same");
    } else { 
        console.log(y);
        return y;
        
    }
}

biggest(b,c);
biggest(3, 5);
biggest(3,3);
function squareDigits(num){
    let s="";
    let test = num.toString();
    for (let i = 0; i < num.toString().length; i++) {
        s+=Math.pow(parseInt(test[i]),2);
    }
    return parseInt(s);
}
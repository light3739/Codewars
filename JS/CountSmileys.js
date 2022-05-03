
function countSmileys(arr) {
    let k=0,i=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===':)' || arr[i]===':D' || arr[i]===';-D' || arr[i]===':~)' || arr[i]===';)' || arr[i]===';D' || arr[i]===':-D' || arr[i]===';~)' || arr[i]===':~D' || arr[i]===';-)' || arr[i]===';~D' || arr[i]===':-)' ){
            k++;
        }
    }

    return k;
}
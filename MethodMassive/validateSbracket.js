function validate(str){
    let arr = str.split('');
    let stacki = [];
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] == ')' && stacki.length == 0) {
            return false;
        } else if ( arr[i] == '(') {
            stacki.push(arr[i]);
        } else if ( arr[i] == ')') {
            stacki.pop();
        }
    }
    return ( stacki.length == 0 ) ? true : false;
}

console.log(validate('()'));
function findwoWelis(str){
    let wowelis = ['q', 'e', 'y', 'u', 'i', 'o', 'a'];
    return  str.split('').reduce((sum, item) => sum + (wowelis.includes(item) ? 1 : 0), 0);
}

console.log(findwoWelis('hello wordyyu'));
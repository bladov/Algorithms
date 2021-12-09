let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]
function filetrObj(arr, key, value){
    return arr.filter((item, pos, arr) => (item.key === value) ? item : 'undefined');
}

function findPeople(arr, key, value) {
    return arr.filter(item => item[key] === value);
}

//let result = filetrObj(objects, 'name', 'Иван');
console.log(findPeople(objects,'name', 'Пётр'));

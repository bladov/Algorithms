let objects = [
    {
        name: 'Василий',
        surname: 'Васильев'
    },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]


function findPeople(arr, key, value) {
    return [arr.find(item => item[key] === value)];
}


console.log(findPeople(objects,'surname', 'Васильев'));
console.log(objects);

// export default {findPeople};

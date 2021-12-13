function count (string) {
    let cache={};

    string.split('').map(item => cache[item] = cache[item] + 1 || 1);

    return cache;
}

console.log(count('gabccaag'));


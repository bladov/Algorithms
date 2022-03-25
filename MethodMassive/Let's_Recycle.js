//https://www.codewars.com/kata/lets-recycle

// paper,   []
// glass,   []
// organic  []
// plastic. []

const recycle = (array) => {
    let result = [[], [], [], []];

    array.forEach(item => {
        if (item["material"] == 'paper') {
            result[0].push(item['type'])
        } else if (item["material"] == 'glass') {
            result[1].push(item['type'])
        } else if (item["material"] == 'organic') {
            result[2].push(item['type'])
        } else if (item["material"] == 'plastic') {
            result[3].push(item['type'])
        }

        if (item["secondMaterial"] == 'paper') {
            result[0].push(item['type'])
        } else if (item["secondMaterial"] == 'glass') {
            result[1].push(item['type'])
        } else if (item["secondMaterial"] == 'organic') {
            result[2].push(item['type'])
        } else if (item["secondMaterial"] == 'plastic') {
            result[3].push(item['type'])
        }
    })

    return result
}

console.log(recycle( [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]))


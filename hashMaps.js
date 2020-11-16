const map = new Map([
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
])

const array = ["one","two","three","four","five","six","seven"]

for (let i = 0; i < array.length; i++){
    if(map.has(array[i])){
        let temp = map.get(array[i])
        map.set(array[i], temp + 1)
    }
    else map.set(array[i], 1)
}

console.log(map)


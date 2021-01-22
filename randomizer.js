
function RandomString(){
    let array = []

    for (let i = 0; i < 5 ; i++){
        array.push(getRandomInt(65))
    }

    array.push(getRandomInt(23))
    // array = array.join("").split(" ")
    array = shuffle(array)
    
    const string = array.join("")

    return string

}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

const map = {}
let repeats = {"unique": 0, "repeats": 0}
let unique = true

function Test(){
    for (let i = 0; i < 100000; i++){
        let temp = RandomString()
        if(map[temp]){
                map[temp]+=1
                repeats["repeats"]=temp
                unique = false
                break
        }
        else {
            map[temp] = 1
            repeats["unique"]+=1
        }
    }
    console.log(repeats)
    return unique
}

console.log(Test())




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
    for (let i = 0; i < 101000; i++){
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

/* 
green dot: x=2000, y=10000
    y=.0025x^2    ratio: .2
blue dot: x=100, y=10000
    y=x^2     ratio:.01
black dot: x=200, y=10000
    y=.25x^2    ratio: .02
red dashed: x=10000, y=10000
    y=.0001x^2    ratio: 1
black solid: x=10000, y=100
    y=.000001x^2    ratio: .01
blue solid: x=10000, y=2000
    y=.00002x^2    ratio: .2
green solid: x=10000, y=200
    y=.000002x^2    ratio: .02

for change in y, its: (new Y/old Y) * slope
for change in x, its: slope /  (new X/old X)^2 
*/



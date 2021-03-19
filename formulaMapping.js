const test1 = "y = -45 + x^2 +4x + 45x^3"
const test2 = "y=45+4x\u00B2"
const test3 = "f(x)=5x + 5x -36" // z(x) = // 5x^2 // 0.5x^2 ^[a-z](\(x\))?
const test4 = "y = 0.0001x²"
const test5 = ""
const test6 = "+++++++++----------++++++"


/* 
3 = \u00B3
2 = \u00B2
1 = \u00B9
0 = \u2070
*/
const formulaMapping = (formula, xLimit) => {
    let coeffMap = {"0":0, "1":0, "2":0, "3":0}
    let noSpace = formula.replace(/\s+/g, '').toLowerCase().replace(/^[a-z](\(x\))?/g,'').replace(/[!*@#$%&_`~?<>()]/g,'')
    let formulaArray = noSpace.split(/[=+-]/)
    const filtered = formulaArray.filter(string => string !== "y").filter(string => string !== "")
    
    const switchCases = (action, object, key,  value) => {
        switch(action){
          case "+":
            object[key] = object[key] + parseFloat(value)
            break
          case "-":
            object[key] = object[key] + parseFloat(value * -1)
            break
          default:
            console.log("value", parseFloat(value))
            object[key] = object[key] + parseFloat(value)      
          }
    }

    for (let i = 0; i < filtered.length; i++){
        const action = noSpace[noSpace.indexOf(filtered[i])-1]
      if (filtered[i].includes("x^")){
          let splitSub = filtered[i].split("x^")
          if (splitSub[0] === ""){
              splitSub[0] = "1"
          }
        switchCases(action, coeffMap, splitSub[1], splitSub[0])
      }
      else if(filtered[i].includes("x")){
          let splitSub = filtered[i].split("x")
          console.log(splitSub)
          if (splitSub[0] === ""){ // y = 5 + 4x + 3x^2
            splitSub[0] = "1"
        }
        if (splitSub[1] === ""){
            splitSub[1] = "1"
        }
        console.log(typeof(splitSub[1]))
        switch(splitSub[1]){
            case "\u2070":
                splitSub[1] = "0"
                break
            case "\u00B9":
                splitSub[1] = "1"
                break
            case "\u00B2":
                splitSub[1] = "2"
                break
            case "\u00B3":
                splitSub[1] = "3"
                break
            case '²':
                splitSub[1] = "2"
            default:
                console.log(splitSub[1])
                break
            
        }
        switchCases(action, coeffMap, splitSub[1], splitSub[0])
      }else {
          switchCases(action, coeffMap, '0', filtered[i])
      }

    }
    let coeffArray = Object.values(coeffMap);
    console.log(coeffArray)
    let zeroesCounter = 0;
    let i = coeffArray.length - 1
    do {
        zeroesCounter++
        i--;
    }
    while (coeffArray[i] === 0)

    let numberOfTerms = coeffArray.length - zeroesCounter;
    switch (numberOfTerms) {
        case 1:
            return [numberOfTerms+1,...coeffArray.slice(0, numberOfTerms),0,xLimit]
        default:
            return [numberOfTerms, ...coeffArray.slice(0, numberOfTerms),xLimit];
    }
  }


  console.log(`String is : -${test6}-`, formulaMapping(test6, 4500))


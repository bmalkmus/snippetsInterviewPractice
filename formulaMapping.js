const test1 = "y = -45 + x^2 +4x + 45x^3"
const test2 = "y=45+4x\u00B2"
const test3 = "f(x)=5x + 5x -36" // z(x) = // 5x^2 // 0.5x^2 ^[a-z](\(x\))?
const test4 = "y = 0.0001x²"
const test5 = ""
const test6 = "y = 3.28344479029088x  -0.0006895728773731349x² + 3.7204303037251835e-8x³"
const test7 = "y = 2.9654727102432377x  -0.0005677487236386063x² + 0.000000027755610946104103x³"


/* 
3 = \u00B3
2 = \u00B2
1 = \u00B9
0 = \u2070
*/
const formulaMapping = (formula, xLimit) => {
    let coeffMap = {"0":0, "1":0, "2":0, "3":0}
    let noSpace = formula.replace(/\s+/g, '').toLowerCase().replace(/^[a-z](\(x\))?/g,'').replace(/[!*@#$%&_`~?<>()]/g,'')
    console.log(noSpace)
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
            object[key] = object[key] + parseFloat(value)      
          }
    }

    for (let i = 0; i < filtered.length; i++){
        const action = noSpace[noSpace.indexOf(filtered[i])-1]
        if(filtered[i].includes("e")){
            let value = filtered[i].slice(0,filtered[i].indexOf("e"))
            let expo = filtered[i+1].split("x")[0]
            let tempAction = noSpace[noSpace.indexOf(filtered[i+1])-1]
            let newExpo = parseFloat(tempAction + expo)

            let newValue = parseFloat(value) * Math.pow(10,newExpo)

            console.log(newValue)
            
        }
      if (filtered[i].includes("x^")){
          let splitSub = filtered[i].split("x^")
          if (splitSub[0] === ""){
              splitSub[0] = "1"
          }
        switchCases(action, coeffMap, splitSub[1], splitSub[0])
      }
      else if(filtered[i].includes("x")){
          let splitSub = filtered[i].split("x")
          if (splitSub[0] === ""){ // y = 5 + 4x + 3x^2
            splitSub[0] = "1"
        }
        if (splitSub[1] === ""){
            splitSub[1] = "1"
        }
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
            case '⁰':
                  splitSub[1] = "0"
            case '¹':
                  splitSub[1] = "1"
            case '²':
                  splitSub[1] = "2"
            case '³':
                  splitSub[1] = "3"
            default:
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
    let i = coeffArray.length -1
    while (coeffArray[i] === 0){
        zeroesCounter++
        i--;
    }

    console.log([coeffArray.length,zeroesCounter])
    let numberOfTerms = coeffArray.length - zeroesCounter;
    switch (numberOfTerms) {
        case 1:
            return [numberOfTerms+1,...coeffArray.slice(0, numberOfTerms),0,xLimit]
        default:
            return [numberOfTerms, ...coeffArray.slice(0, numberOfTerms),xLimit];
    }
  }

  console.log("test6",formulaMapping(test6, 10000))
  console.log("test7",formulaMapping(test7, 10000))


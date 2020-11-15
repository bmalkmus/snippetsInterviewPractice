function zero(arg){
    if(arg){
        let calculationString = "0"+arg;
        return stringToValue(calculationString);
    }
    return "0"
}
function one(arg){
    if(arg){
        let calculationString = "1"+arg;
        return stringToValue(calculationString);
    }
    return "1"
}
function two(arg){
    if(arg){
        let calculationString = "2"+arg;
        return stringToValue(calculationString);
    }
    return "2"
}
function three(arg){
    if(arg){
        let calculationString = "3"+arg;
        return stringToValue(calculationString);
    }
    return "3"
}
function four(arg){
    if(arg){
        let calculationString = "4"+arg;
        return stringToValue(calculationString);
    }
    return "4"
}
function five(arg){
    if(arg){
        let calculationString = "5"+arg;
        return stringToValue(calculationString);
    }
    return "5"
}
function six(arg){
    if(arg){
        let calculationString = "6"+arg;
        return stringToValue(calculationString);
    }
    return "6"
}
function seven(arg){
    if(arg){
        let calculationString = "7"+arg;
        return stringToValue(calculationString);
    }
    return "7"
}
function eigth(arg){
    if(arg){
        let calculationString = "8"+arg;
        return stringToValue(calculationString);
    }
    return "8"
}
function nine(arg){
    if(arg){
        let calculationString = "9"+arg;
        return stringToValue(calculationString);
    }
    return "9"
}

function plus(arg) {
    return "+"+arg
}

function minus(arg) {
    return "-"+arg
}

function times(arg) {
    return "*"+arg
}

function dividedBy(arg) {
    return "/"+arg
}

function stringToValue(string){
    let calArray = string.split("");
        calArray[0] = parseInt(calArray[0])
        calArray[2] = parseInt(calArray[2])
        switch (calArray[1]){
            case "+":
                return calArray[0] + calArray[2]
            case "-":
                return calArray[0] - calArray[2]
            case "*":
                return calArray[0] * calArray[2]
            case "/":
                return Math.floor(calArray[0] / calArray[2])
        }
}



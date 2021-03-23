
let sample = [[40, 40], [803.5833496093751, -440.61669921879815]]
let margin = { top: 20, right: 20, bottom: 40, left: 40 }
let zapCostScale = 0.002080660121933998;
let dotSupplyScale = 0.13096147270780173;

function pointsToCoeff(pointsArray, margin, zapCostScale, dotSupplyScale, previousXLimit = 0){
    let coefficientArray = [];
    let x0, x1, x2, x3;
    let y0, y1, y2, y3;
    // let _x0, _x1, _x2, _x3;
    // let _y0, _y1, _y2, _y3;

    console.log(pointsArray)
    switch(pointsArray.length){
        case 4:

            let index0 = adjustToCoordinates(pointsArray[0])
            x0 = index0[0]
            y0 = index0[1]
            let index1 = adjustToCoordinates(pointsArray[1])
            x1 = index1[0]
            y1 = index1[1]
            let index2 = adjustToCoordinates(pointsArray[2])
            x2 = index2[0]
            y2 = index2[1]
            let index3 = adjustToCoordinates(pointsArray[3])
            x3 = index3[0]
            y3 = index3[1]

            coefficientArray[0] = 4;
            coefficientArray[1] = y0;
            coefficientArray[2] = (y1-y0)/x1;
            coefficientArray[3] = (y2-(2 * y1) + y0)/(3 * Math.pow(x1, 2));
            coefficientArray[4] = ((y3 - y0) - (3 * y2) + (3 * y1))/(27 * Math.pow(x1, 3));
            coefficientArray[5] = x3 - previousXLimit; 
            
            return coefficientArray
        case 3 :
            let index0 = adjustToCoordinates(pointsArray[0])
            x0 = index0[0]
            y0 = index0[1]
            let index1 = adjustToCoordinates(pointsArray[1])
            x1 = index1[0]
            y1 = index1[1]
            let index2 = adjustToCoordinates(pointsArray[2])
            x2 = index2[0]
            y2 = index2[1]

            coefficientArray[0] = 3;
            coefficientArray[1] = y0;
            coefficientArray[2] = (y1-y0)/x1;
            coefficientArray[3] = (y2 -(2 * y1) + y0)/(4 * Math.pow(x1, 2));
            coefficientArray[4] = x2 + previousXLimit

            return coefficientArray

        case 2 :
            let index0 = adjustToCoordinates(pointsArray[0])
            x0 = index0[0]
            y0 = index0[1]
            let index1 = adjustToCoordinates(pointsArray[1])
            x1 = index1[0]
            y1 = index1[1]


            coefficientArray[0] = 2;
            coefficientArray[1] = y0;
            coefficientArray[2] = (y1 - y0) / x1;
            coefficientArray[3] = x1 + previousXLimit

            return coefficientArray
        case 1:
            let index = adjustToCoordinates(adjCoord)
            x0 = index[0]
            y0 = index[1]

            coefficientArray[0] = 1;
            coefficientArray[1] = y0;
            
            return coefficientArray;

    }

    function adjustToCoordinates(adjCoord, constant=1){
        console.log("Coord", adjCoord)
        let coordX = (adjCoord[0] + margin.left) * dotSupplyScale;
        console.log(coordX, "X")
        let coordY = ((adjCoord[1]-margin.bottom) / (-1)) * (constant * zapCostScale)
        console.log(coordY, "Y")
        return [coordX, coordY]
    }
}

console.log(pointsToCoeff(sample, margin, zapCostScale, dotSupplyScale))


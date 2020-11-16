var regExp = /\(([^)]+)\)/;
const input = "(start)(push)(4)(push)(9)(div)(end)"

let array = input.split(regExp)
let filtered = array.filter(e => e != "")
let values = [];


for (let i = 0; i < filtered.length; i++){
    switch(filtered[i]){
        case "start":
            values = [];
            break;
        case "push":
            values.push(parseInt(filtered[i+1]));
            break;
        case "add":
            if (values.length >= 2) {
                let a = values.pop();
                let b = values.pop()
                values.push(a+b);
            }
            break;
        case "sub":
            if (values.length >= 2) {
                let a = values.pop();
                let b = values.pop()
                values.push(a-b);
            }
            break;
        case "mul":
            if (values.length >= 2) {
                let a = values.pop();
                let b = values.pop()
                values.push(a*b);
            }
            break;
        case "div":
            if (values.length >= 2) {
                let a = values.pop();
                let b = values.pop()
                values.push(Math.floor(a/b));
            }
            break;
        case "end":
            console.log(values.pop())
        default:
            break;
    }
}
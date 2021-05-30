function solve(){
    let el1;
    let el2;
    let resultEl;


    return{
        init: (selector1, selector2, resultSelector) => {
             el1 = document.querySelector(selector1);
             el2 = document.querySelector(selector2);
            resultEl = document.querySelector(resultSelector);
        },
        add:
        () => {
            resultEl.value = Number(el1.value) + Number(el2.value)
        },
        subtract: () => {
            resultEl.value = Number(el1.value) - Number(el2.value)
        }
    }
}
let obj = solve()
obj.init('#num1')

let add = obj.add
let subtract = obj.subtract
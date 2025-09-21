function evaluateExpression(expression, variables, values) {
    let result;
    for (let i = 0; i < variables.length; i++) {
        expression = expression.replaceAll(variables[i], values[i]);
    }
    function sqrt(x) {
        if (x < 0) {
            throw "Eror";
        }
        console.log("...");
        return Math.sqrt(x);
    }
    try {
        return Math.round(eval(expression) * 100) / 100;
    } catch {
        return -1
    }
}




console.log(evaluateExpression("sqrt(a - b) + c", ["a", "b", "c"], [9, 4, 3]));
console.log(evaluateExpression("sqrt(x * y) - z", ["x", "y", "z"], [2, -3, 1]));
console.log(evaluateExpression("sqrt(m) + sqrt(n)", ["m", "n"], [16, 9]));
console.log(evaluateExpression("sqrt(a+b-c)", ["a", "b", "c"], [10, 8, 12]));
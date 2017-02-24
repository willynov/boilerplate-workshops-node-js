let chalk = require('chalk');

// console.log(chalk.green('Hello world'));

//ES5
function myEvery(values, acc) {
    let result = true;
    if(acc !== undefined) {
        result = acc;
    }
    console.log('RESULT', result);
    console.log('ARRAY', values);
    if(values && values.length > 0) {
        console.log('coucou');
        console.log('ELEMENT', values[0]);
        return myEvery(values.slice(1), values[0]);
    } else {
        return true;
    }
}

// ES2015
// let myEvery = () => {
//     return true;
// };

module.exports = {
    myEvery: myEvery
}
/*
 * Create the function factorial here
 */
function factorial(n){
    let nFactorial = 1;
    for (let i=n; i>0; i--){
        nFactorial*=i;
    };
    return nFactorial;
}

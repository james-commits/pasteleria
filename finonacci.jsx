/* La sucesión de fibonacci es una sucesión numérica ascendente, en donde cada dígito es la suma de los dos anteriores.
Siempre empieza en 0 y 1, y después va sumando los dos últimos números de la sucesión. El resultado de esta suma será el siguiente número.
Si empezamos con 0 y 1, el siguiente número será 1, ya que 0 + 1 = 1. Entonces la sucesión iría así: 0, 1, 1
El siguiente sería 2, ya que los dos últimos son 1 y 1. Y como sabemos 1 + 1 = 2
0, 1, 1, 2
El siguiente sería 3, ya que 1 + 2 = 3
0, 1, 1, 2, 3
Luego seguimos con 5, porque 2 + 3 = 5
0, 1, 1, 2, 3, 5
Y así sucesivamente: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
El ejercicio consiste en completar la función fibonacci() para que simule este comportamiento.
Debe retornar la sucesión de números en un array.
Recibirá un parámetro limit, el cuál será un entero, e indicará el máximo número al que puede llegar la sucesión (Mayor o igual).
Ejemplos
fibonacci(10) debe retornar: [0, 1, 1, 2, 3, 5, 8]
El siguiente en la sucesión es 13, pero como el límite es 10, llega hasta ahí.
fibonacci(21) debe retornar: [0, 1, 1, 2, 3, 5, 8, 13, 21]
fibonacci(2) debe retornar: [0, 1, 1, 2] */

const fibonacci = (limit) => {
    let fibonacciArray = [0, 1];
    for (let i = 2; i <= limit; i++) {
        for (let j = 0; j < fibonacciArray.length; j++) {
            if (j === 0) {
                fibonacciArray.push(fibonacciArray[j] + fibonacciArray[j + 1]);
            } else if (j === fibonacciArray.length - 1) {
                fibonacciArray.push(fibonacciArray[j] + fibonacciArray[j - 1]);
            } else {
                fibonacciArray.push(fibonacciArray[j] + fibonacciArray[j + 1]);
            }
        }
    }
    return fibonacciArray;
    }
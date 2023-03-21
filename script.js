let number1 = prompt("Digite o primeiro número:")
let number2 = prompt("Digite o segundo número:")

number1 = Number(number1)
number2 = Number(number2)

const sum = number1 + number2
const sub = number1 - number2
const multi = number1 * number2
const div = number1 / number2
const restDiv = number1 % number2

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if (sum % 2 != 0) {
alert(`A soma dos dois números é impar: ${sum}`)
} else {
alert(`A soma dos dois números é par: ${sum}`)
}
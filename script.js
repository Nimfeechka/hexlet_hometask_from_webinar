const getNumber = () => Math.round(Math.random() * 10)
const getResult = (a, b) => a + b

const playRound = () => {
  const number1 = getNumber()
  const number2 = getNumber()
  const userAnswer = prompt(`Сколько будет ${number1} + ${number2}?`)
  
if (Number(userAnswer) === getResult(number1, number2)) {
  alert ('Правильно')
  return true
} else {
  alert ('Вы ошиблись')
  return false
}}

const playGame = () => {
for (let i = 0; i < 3; i++) {
  const isCorrect = playRound()
  if (!isCorrect) {
    return
  }
} alert('Вы выиграли')
}

const button = document.querySelector('button')
console.log
button.addEventListener('click', playGame)
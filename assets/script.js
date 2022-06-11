alert('Você deveria me valorizar mais, hein?')
alert('vou a mimir')
alert('Espero que goste <3')

let hr = (min = sec = ms = '0' + 0),
  startTimer

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', stop)

function start() {
  startButton.classList.add('active')
  pauseButton.classList.remove('stopActive')

  startTimer = setInterval(() => {
    ms++

    ms = ms < 10 ? '0' + ms : ms

    if (ms == 100) {
      sec++
      sec = sec < 10 ? '0' + sec : sec
      ms = '0' + 0
    }
    if (sec == 60) {
      min++
      min = min < 10 ? '0' + min : min
      sec = '0' + 0
    }
    if (min == 60) {
      hr++
      hr = hr < 10 ? '0' + hr : hr
      min = '0' + 0
    }

    putValue()
  }, 10)
}

function pause() {
  startButton.classList.remove('active')
  pauseButton.classList.add('stopActive')

  clearInterval(startTimer)
}

function stop() {
  startButton.classList.remove('active')
  pauseButton.classList.remove('stopActive')

  clearInterval(startTimer)
  hr = min = sec = ms = '0' + 0

  putValue()
}

function putValue() {
  document.querySelector('.milliseconds').innerHTML = ms
  document.querySelector('.seconds').innerHTML = sec
  document.querySelector('.minutes').innerHTML = min
  document.querySelector('.hours').innerHTML = hr
}

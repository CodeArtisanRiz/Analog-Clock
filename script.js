setInterval(setClock, 1000)

const hr = document.querySelector('[data-hour-hand]')
const min = document.querySelector('[data-minute-hand]')
const sec = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(sec, secondsRatio)
  setRotation(min, minutesRatio)
  setRotation(hr, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
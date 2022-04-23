let countId;
let myNumber = document.getElementById('counter')
let add = document.getElementById('plus')
let minus = document.getElementById('minus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let submit = document.getElementById('submit')



function count() {
  countId = setInterval(addmyNumber, 1000)
}
count()

function addmyNumber() {
  myNumber.textContent = parseInt(myNumber.textContent) + 1
}

function counterFeatures() {
  add.addEventListener('click', () => {
    myNumber.textContent = parseInt(myNumber.textContent) + 1
  })
  minus.addEventListener('click', () => {
    if (myNumber.textContent != 0)
      myNumber.textContent = parseInt(myNumber.textContent) - 1
  })
  heart.addEventListener('click', () => {
    let ul = document.querySelector('.likes')
    let li = document.createElement('li')
    li.textContent = `${myNumber.textContent} was liked`
    ul.appendChild(li)
  })

}
counterFeatures()

function pauseNResume() {
  if (pause.innerText === 'pause') {
    clearInterval(countId)
    add.setAttribute('disabled', '')
    minus.setAttribute('disabled', '')
    heart.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    pause.textContent = 'resume'
  } else if (pause.innerText === 'resume') {
    add.removeAttribute('disabled', '')
    minus.removeAttribute('disabled', '')
    heart.removeAttribute('disabled', '')
    submit.removeAttribute('disabled', '')
    pause.textContent = 'pause'
    count()
  }
}
pause.addEventListener('click', pauseNResume)

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let comment = document.getElementById('comment-input').value
  let li = document.createElement('li')
  li.textContent = comment
  let comments = document.querySelector(".comments")
  comments.appendChild(li)
  form.reset()
})
let button = document.getElementById('button')
let add = document.getElementById('append')

button.addEventListener('click', (e) => {
  add.innerText = ''
  fetch('https://git.heroku.com/floating-lake-86488.git/cake')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        let hele = document.createElement('h3')
        hele.innerText = item.type
        add.append(hele)
      })
    })
    .catch((err) => console.log(err))
})
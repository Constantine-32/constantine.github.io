const content = document.getElementById('content')

for (let i = 0; i < 48; i++) {
  let aux = document.createElement('div')
  aux.className = 'domino'
  aux.style = 'background-position: -3px ' + (109 * -(((i % 6) * 8) + Math.floor(i / 6)) - 4) + 'px'
  aux.addEventListener('click', (e) => {
    e.target.style.opacity !== '0' ? e.target.style.opacity = '0' : e.target.style.opacity = '1'
  })
  content.appendChild(aux)
}

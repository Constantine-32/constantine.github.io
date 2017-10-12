function updateValues(id) {
  const ELE = document.getElementsByClassName('unit_input')
  const RATIOS = [1, 60, 3600, 86400, 604800, 2628000, 31536000, 2491344000, 143173440000000000, 435165264000000000]

  if (!isNaN(ELE[id].value) && ELE[id].value >= 0) ELE[0].value = ELE[id].value * RATIOS[id]

  for (let i = 0; i < RATIOS.length; i++) {
    ELE[i].value = Math.round(ELE[0].value / RATIOS[i] * 10) / 10
    if (ELE[i].value === '0') ELE[i].value = ''
  }
}
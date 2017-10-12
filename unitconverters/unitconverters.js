function updateValues(un, id) {
  const ELE = document.getElementsByClassName('unit_input')
  const RATIOS = [[1, 60, 3600, 86400, 604800, 2.628e+6, 31.536e+6, 2.491344e+9, 143.17344e+15, 435.165264e+15],
                  [1, 1e+3, 1e+6, 1e+7, 1e+9, 1e+12, 2.54e+7, 3.048e+8, 9.144e+8, 1.60934e+12, 1.852e+12]]

  if (!isNaN(ELE[id].value) && ELE[id].value >= 0) ELE[0].value = ELE[id].value * RATIOS[un][id]

  for (let i = 0; i < RATIOS[un].length; i++) {
    ELE[i].value = Math.round(ELE[0].value / RATIOS[un][i] * 10) / 10
    if (ELE[i].value === '0') ELE[i].value = ''
  }
}
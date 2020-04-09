$(function () {
  const dd = {
    'Auren':      {'sh': [4,  6], 'sa': [4,  8]},
    'Witches':    {'sh': [4,  6], 'sa': [4,  6]},
    'Fakirs':     {'sh': [4, 10], 'sa': [4,  6]},
    'Nomads':     {'sh': [4,  8], 'sa': [4,  6]},
    'Chaos':      {'sh': [4,  4], 'sa': [4,  8]},
    'Giants':     {'sh': [4,  6], 'sa': [4,  6]},
    'Swarmlings': {'sh': [5,  8], 'sa': [5,  8]},
    'Mermaids':   {'sh': [4,  6], 'sa': [4,  8]},
    'Dwarves':    {'sh': [4,  6], 'sa': [4,  6]},
    'Engineers':  {'sh': [4,  8], 'sa': [4,  6]},
    'Halflings':  {'sh': [4,  8], 'sa': [4,  6]},
    'Cultists':   {'sh': [4,  8], 'sa': [4,  8]},
    'Alchemists': {'sh': [4,  6], 'sa': [4,  6]},
    'Darklings':  {'sh': [4,  6], 'sa': [4, 10]}
  }

  const vs = {
    'op': 0, 'odw': 0, 'otp': 0, 'otpp': 0, 'ote': 0, 'osa': 0, 'osh': 0, 'odig': 0, 'oship': 0,
    'aw': 0, 'ac': 0, 'ap': 0, 'iw': 0, 'ic': 0, 'ip': 0, 'bw': 0, 'bc': 0, 'bp': 0
  }

  let race = 'Darklings'

  $('.race-button').each(function (_, element) {
    element.addEventListener('click', function (event) {
      const newRace = event.target.value
      if (newRace !== race) {
        $('#'+race).removeClass('selected')
        $('#'+newRace).addClass('selected')
        race = newRace
        recalc()
      }
    })
  })

  $('.button').each(function (_, element) {
    element.addEventListener('click', function (event) {
      const id = event.target.id
      if (vs[id] === 99) return
      vs[id]++
      $('#'+id+'-text')[0].value = vs[id]
      recalc()
    })

    element.addEventListener('contextmenu', function (event) {
      const id = event.target.id
      if (vs[id] === 0) return
      vs[id]--
      $('#'+id+'-text')[0].value = vs[id]
      recalc()
    })
  })

  $('[id$="-text"]').each(function (_, element) {
    element.addEventListener('focus', function (event) {
      event.target.select()
    })

    element.addEventListener('keyup', function (event) {
      const target = event.target
      if (isNaN(target.value)) {
        target.value = 0
        return
      }

      if (target.value < 0) target.value = 0
      if (target.value > 99) target.value = 99

      vs[target.id.replace('-text', '')] = parseInt(target.value)

      recalc()
    })

    element.addEventListener('onblur', function (event) {
      const value = event.target.value
      console.log(value)
    })
  })

  function recalc() {
    vs['bw'] = vs['aw'] + vs['iw']
    vs['bc'] = vs['ac'] + vs['ic']
    vs['bp'] = vs['ap'] + vs['ip'] - vs['op']

    // Std structures
    if (race === 'Swarmlings') {
      vs['bw'] -= vs['odw'] * 2 + vs['otp'] * 3 + vs['otpp'] * 3 + vs['ote'] * 3
      vs['bc'] -= vs['odw'] * 3 + vs['otp'] * 4 + vs['otpp'] * 8 + vs['ote'] * 6
    } else {
      vs['bw'] -= vs['odw']     + vs['otp'] * 2 + vs['otpp'] * 2 + vs['ote'] * 2
      vs['bc'] -= vs['odw'] * 2 + vs['otp'] * 3 + vs['otpp'] * 6 + vs['ote'] * 5
    }

    // Specific structures
    vs['bw'] -= vs['osa'] * dd[race]['sa'][0] + vs['osh'] * dd[race]['sh'][0]
    vs['bc'] -= vs['osa'] * dd[race]['sa'][1] + vs['osh'] * dd[race]['sh'][1]

    // Dig
    if (race !== 'Darklings') {
      vs['bw'] -= vs['odig'] * 2
      vs['bc'] -= vs['odig'] * (race === 'Halflings' ? 1 : 5)
      vs['bp'] -= vs['odig']
    }

    // Shipping
    if (!(race === 'Fakirs' || race === 'Dwarves')) {
      vs['bc'] -= vs['oship'] * 4
      vs['bp'] -= vs['oship']
    }

    $('#bw-text')[0].value = vs['bw']
    $('#bc-text')[0].value = vs['bc']
    $('#bp-text')[0].value = vs['bp']
  }
})
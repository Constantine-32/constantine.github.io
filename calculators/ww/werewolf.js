const players = document.getElementById('players')
const wolves = document.getElementById('wolves')

const output = document.getElementById('output')

const blanco = document.getElementById('blanco')
const artificiero = document.getElementById('artificiero')
const perro_lobo = document.getElementById('perro_lobo')
const sigiloso = document.getElementById('sigiloso')
const mago = document.getElementById('mago')
const doppelganger = document.getElementById('doppelganger')
const infecto = document.getElementById('infecto')
const cazador = document.getElementById('cazador')
const esquivo = document.getElementById('esquivo')
const lobito = document.getElementById('lobito')
const nostradamus = document.getElementById('nostradamus')
const infectado = document.getElementById('infectado')
const feroz = document.getElementById('feroz')
const noble = document.getElementById('noble')
const tipo_duro = document.getElementById('tipo_duro')
const hechicera = document.getElementById('hechicera')
const tonto = document.getElementById('tonto')
const hermanos = document.getElementById('hermanos')
const vidente = document.getElementById('vidente')
const barbero = document.getElementById('barbero')
const masa = document.getElementById('masa')
const bruja = document.getElementById('bruja')
const cuervo = document.getElementById('cuervo')
const peludo = document.getElementById('peludo')
const cuputa = document.getElementById('cuputa')
const confesor = document.getElementById('confesor')
const sirvienta = document.getElementById('sirvienta')
const maldito = document.getElementById('maldito')
const nino_salvaje = document.getElementById('nino_salvaje')
const borracho = document.getElementById('borracho')
const protector = document.getElementById('protector')
const zorro = document.getElementById('zorro')
const cucurtidor = document.getElementById('cucurtidor')
const insomne = document.getElementById('insomne')
const feriante = document.getElementById('feriante')
const martir = document.getElementById('martir')
const caballero = document.getElementById('caballero')
const anciano = document.getElementById('anciano')
const actor = document.getElementById('actor')
const bomba = document.getElementById('bomba')
const bloody_mary = document.getElementById('bloody_mary')
const liante = document.getElementById('liante')

const checkboxes = [blanco, artificiero, perro_lobo, sigiloso, mago, doppelganger, infecto, cazador, esquivo, lobito, nostradamus, infectado, feroz, noble, tipo_duro, hechicera, tonto, hermanos, vidente, barbero, masa, bruja, cuervo, peludo, cuputa, confesor, sirvienta, maldito, nino_salvaje, borracho, protector, zorro, cucurtidor, insomne, feriante, martir, caballero, anciano, actor, bomba, bloody_mary, liante]
checkboxes.map(e => e.addEventListener('click', () => updateList()))

players.addEventListener('keyup', () => {
  wolves.value = Math.round(parseInt(players.value) * 0.2)
  updateList()
})

wolves.addEventListener('keyup', () => {
  updateList()
})

const updateList = () => {
  let players_num = parseInt(players.value)
  let wolves_num = parseInt(wolves.value)
  let town_num = players_num - wolves_num

  let list = []

  if (blanco.checked) { list.push(['Blanco', 1]); wolves_num-- }
  if (sigiloso.checked) { list.push(['Sigiloso', 2]); wolves_num-- }
  if (infecto.checked) { list.push(['Infecto', 2]); wolves_num-- }
  if (lobito.checked) { list.push(['Lobito', 2]); wolves_num-- }
  if (feroz.checked) { list.push(['Feroz', 2]); wolves_num-- }

  for (let i = 0; i < wolves_num; i++) list.push(['Lobo', 2])

  if (hechicera.checked) { list.push(['Hechicera', 2]); town_num-- }
  if (vidente.checked) { list.push(['Vidente', 3]); town_num-- }
  if (bruja.checked) { list.push(['Bruja', 3]); town_num-- }
  if (cuputa.checked) { list.push(['Cuputa', 3]); town_num-- }
  if (maldito.checked) { list.push(['Maldito', 3]); town_num-- }
  if (protector.checked) { list.push(['Protector', 3]); town_num-- }
  if (insomne.checked) { list.push(['Insomne', 3]); town_num-- }
  if (caballero.checked) { list.push(['Caballero', 3]); town_num-- }
  if (bomba.checked) { list.push(['Bomba', 3]); town_num-- }
  if (artificiero.checked) { list.push(['Artificiero', 3]); town_num-- }
  if (mago.checked) { list.push(['Mago', 3]); town_num-- }
  if (cazador.checked) { list.push(['Cazador', 3]); town_num-- }
  if (nostradamus.checked) { list.push(['Nostradamus', 3]); town_num-- }
  if (noble.checked) { list.push(['Noble', 3]); town_num-- }
  if (tonto.checked) { list.push(['Tonto', 3]); town_num-- }
  if (barbero.checked) { list.push(['Barbero', 3]); town_num-- }
  if (cuervo.checked) { list.push(['Cuervo', 3]); town_num-- }
  if (confesor.checked) { list.push(['Confesor', 3]); town_num-- }
  if (nino_salvaje.checked) { list.push(['Niño salvaje', 3]); town_num-- }
  if (zorro.checked) { list.push(['Zorro', 3]); town_num-- }
  if (feriante.checked) { list.push(['Feriante', 3]); town_num-- }
  if (anciano.checked) { list.push(['Anciano', 3]); town_num-- }
  if (bloody_mary.checked) { list.push(['Bloody mary', 3]); town_num-- }
  if (perro_lobo.checked) { list.push(['Perro lobo', 3]); town_num-- }
  if (doppelganger.checked) { list.push(['Doppelganger', 3]); town_num-- }
  if (esquivo.checked) { list.push(['Esquivo', 3]); town_num-- }
  if (infectado.checked) { list.push(['Infectado', 3]); town_num-- }
  if (tipo_duro.checked) { list.push(['Tipo duro', 3]); town_num-- }
  if (hermanos.checked) { list.push(['Hermanos', 3]); town_num--; list.push(['Hermanos', 3]); town_num-- }
  if (masa.checked) { list.push(['Masa', 3]); town_num-- }
  if (peludo.checked) { list.push(['Peludo', 3]); town_num-- }
  if (sirvienta.checked) { list.push(['Sirvienta', 3]); town_num-- }
  if (borracho.checked) { list.push(['Borracho', 3]); town_num-- }
  if (cucurtidor.checked) { list.push(['Cucurtidor', 3]); town_num-- }
  if (martir.checked) { list.push(['Martir', 3]); town_num-- }
  if (actor.checked) { list.push(['Actor', 3]); town_num-- }

  if (liante.checked) { town_num-- }
  for (let i = 0; i < town_num; i++) list.push(['Aldeano', 3])
  if (liante.checked) { list.push(['Liante', 4]) }

  output.innerHTML = list.map(e => '<div class="team' + e[1] + '">' + e[0] + '</div>').join('')
}

updateList()

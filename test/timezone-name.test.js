import test from 'tape'
import spacetime from './lib/index.js'

test('titlecase', (t) => {
  let arr = [
    'Africa/Dar_Es_Salaam',
    'Africa/Porto-novo',
    'America/Blanc-sablon',
    'America/Port-au-Prince',
    'America/Port_of_Spain',
    'Europe/Isle_of_Man',
    'Antarctica/DumontDUrville',
    'Antarctica/McMurdo',
    'Asia/Ust-Nera',
    'Europe/Zagreb',
    'America/Bahia_Banderas',
    'Asia/Kuching',
    'Etc/GMT+7',
  ]
  arr.forEach(tz => {
    let s = spacetime.now(tz)
    t.equal(s.timezone().name, tz, tz)
  })
  t.end()
})

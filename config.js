import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283816171576', 'ZhaaLL', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['6283816171576'] // Want some help?
global.prems = ['6283816171576'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '493053acc612476f',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'ZhaaLL Bott'
global.author = 'XhaaLL_Valor๐ฎ๐ณ'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '๐๏ธ',
      limit: '๐ณ',
      health: 'โค๏ธ',
      exp: 'โ๏ธ',
      money: '๐ฐ',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      trash: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      wood: '๐ชต',
      rock: '๐ชจ',
      string: '๐ธ๏ธ',
      horse: '๐',
      cat: '๐',
      dog: '๐',
      fox: '๐ฆ',
      petFood: '๐',
      iron: 'โ๏ธ',
      gold: '๐',
      emerald: '๐'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Updated - config.js"))
  import(`${file}?update=${Date.now()}`)
})

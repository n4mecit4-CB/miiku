import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['56961548695', 'ᎷᎥᎥᏦᏬ💅', true], ['56961548695', 'Colaborador', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '+56961548695'
global.confirmCode = ''

global.animxscans = ['400359205']
global.suittag = []
global.mods = []
global.prems = []

global.packname = 'ᎷᎥᎥᏦᏬ💅'
global.author = 'n4mecit4'
global.wm = 'ᎷᎥᎥᏦᏬ💅'
global.wm2 = 'ᎷᎥᎥᏦᏬ💅 : 𝗕𝗈𝗍'
global.azami = 'n4mecit4'
global.cb = 'n4mecit4'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '5217294888993'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

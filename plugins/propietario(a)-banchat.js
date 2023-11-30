let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`*[🛑] ESTE CHAT FUE BANEADO [🛑]*\n\n*❌ESTE CHAT NO TIENE PERMISO PARA USARME HASTA QUE SEA DESBANEADO, ATTE ⲘⲒⲒⲔⴑ❌*`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler

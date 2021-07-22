let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/fakta`).then ((res) => {
	 	let hasil = `${res.data.result.fakta}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['faktaunik']
handler.tags = ['internet']
handler.command = /^(faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
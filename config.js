/*
 * Create By Dika Ardnt.
 * Contact Me on wa.me/6288292024190
 * Follow https://github.com/DikaArdnt
   
 * Recode By Rasyid
 * Contact Me on wa.me/6282189387018
*/

const fs = require('fs')
const chalk = require('chalk')

// Other
global.ownername = 'Nielzie'
global.owner = ['6282189387018']
global.packname = 'Created By Nielzie7  â¤ï¸ï¸'
global.author = 'Nielzie7'
global.sessionName = 'session'
global.thumb = fs.readFileSync('./lib/nielzie.ico')
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=NIELZIE7'
global.prefa = ['/']
global.sp = 'â­'
global.mess = {
  admin: 'ð  Command ini hanya bisa digunakan oleh admin grup!',
  botAdmin: 'Jadikan bot sebagai admin terlebih dahulu! ð',
  owner: 'â ï¸ Command ini khusus Owner-sama! â ï¸',
  group: 'ð¥  Command ini hanya bisa digunakan di dalam grup!',
  private: 'â¡Fitur Digunakan Hanya Untuk Private Chat!',
  bot: 'â¥ï¸Fitur Khusus Pengguna Nomor Bot',
  done: 'Done, ~â¥ï¸',
  wait: '```Loading, ð```',
  text: 'Apa Yang Mau Di Cari? ð',
  error: 'Ups Sepertinya Terjadi Kesalahan',
  now: 'Fitur Ini Sudah Di Gunakan!',
  premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
  endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
  free: "100",
  premium: "1000",
  vip: "unlimited"
}

global.rules = `*ââ ã RULES AND FAQ ã ââ*

1. Jangan spam bot. ð
Sanksi: *â ï¸ WARN/SOFT BLOCK*

2. Jangan telepon bot. âï¸
Sanksi: *â SOFT BLOCK*

3. Jangan mengeksploitasi bot.ð
Sanksi: *â¼ï¸ PERMANENT BLOCK â¼ï¸*

ð¯ï¸ Bot tidak atau lambat merespon ?
â¡ï¸ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesâ¼ï¸

ð¯ï¸ Dimana saya bisa mendapatkan Script dari bot ini ?
â¡ï¸ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

ð¯ï¸ Boleh saya menambah ke grup?
â¡ï¸ Untuk sementara bot dalam status free to add.

ð¯ï¸ Prefixnya apa ya?
â¡ï¸ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

ð¯ï¸ Kak, kok syaa chat owner tidak direspon?
â¡ï¸ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *.help* untuk memulai!

â ï¸ Segala kebijakan dan ketentuan NielBot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*ï¹*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan NielBot
ðð`


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
})

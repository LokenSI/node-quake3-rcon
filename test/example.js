/*
 * minimal example
 */

const Q3RCon = require("quake3-rcon")

const rcon = new Q3RCon({
  address: "quake.wapps.cloud",
  password: "chucknorris666",
  /*port:  27960*/
})

rcon.send("say Hello, World!", (message) => {
  console.log(message)
})

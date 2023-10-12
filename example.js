/*
 * minimal example
 */

const Q3RCon = require("quake3-rcon")

const rcon = new Q3RCon({
  debug: true,
  address: "quake.wapps.cloud",
  password: "chucknorris666",
  timeout: 7000,
})

rcon.send("say Hello, World !", (message) => {
  console.log(message)
})

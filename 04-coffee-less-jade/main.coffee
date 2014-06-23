Colors = require("./colors/colors.coffee")

window.onload = ->
  colors = new Colors()
  document.getElementsByTagName("body")[0].innerHTML = colors.getTemplate()

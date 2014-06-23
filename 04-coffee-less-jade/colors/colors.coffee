require './colors.less'
template = require './colors.jade'

class @Colors
  getTemplate: -> template

module.exports = @Colors

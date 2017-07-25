var winston = require('winston')
var Pusher = require('pusher')
var util = require('util')

var PusherLogger = winston.transports.PusherLogger = function (options) {
	
	this.name = 'PusherLogger'
	this.level = options.level || 'info'
	var pusher_options = options.pusher

	if(!pusher_options) {
		throw "Pusher config not found!"
	}

	this.pusher = new Pusher({
  		appId: pusher_options.appId,
  		key: pusher_options.key,
  		secret: pusher_options.secret,
  		cluster: pusher_options.cluster,
  		encrypted: pusher_options.encrypted
	})


	this.channel = options.channel || 'default'
	this.event = options.event || 'default'

}

util.inherits(PusherLogger, winston.Transport)

PusherLogger.prototype.log = function (level, msg, meta, callback) {

	this.pusher.trigger(this.channel, this.event, {
		"level": level,
		"message": msg
	})

	callback(null, true)
}

module.exports = PusherLogger
module.exports.PusherLogger = PusherLogger
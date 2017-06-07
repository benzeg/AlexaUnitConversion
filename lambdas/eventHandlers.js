const events = {
	LaunchRequest: function() {
		this.emit('SayHello')
	},
	HelloWorldIntent: function() {
		this.emit('SayHello');
	},
	SayHello: function() {
		this.emit(':tell', 'Hello World!')
	}
}

export { events };
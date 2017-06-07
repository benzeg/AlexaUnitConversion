const events = {
	LaunchRequest: () => {
		this.emit('SayHello')
	},
	HelloWorldIntent: () => {
		this.emit('SayHello');
	},
	SayHello: () => {
		this.emit(':tell', 'Hello World!')
	}
}

export { events };
const events = {
	LaunchRequest: function() {
		this.emit('SayHello')
	},
	HelloWorldIntent: function() {
		this.emit('SayHello');
	},
	SayHello: function() {
		console.log('in hello world')
		this.emit(':tell', 'Hello World!')
	},
	Inquiry: function() {
		this.emit('ConvertUnit');
	},
	ConvertUnit: function() {
		const val = parseInt(this.event.request.intent.slots.valOne.value);
		const convertingUnit = this.event.request.intent.slots.unitOne.value;
		const convertionUnit = this.event.request.intent.slots.unitTwo.value;
		this.emit(':tell', convertionUnit);
	}
}

export { events };
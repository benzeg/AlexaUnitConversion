const events = {
	'helloWorldIntent': () => {
		this.emit(':tell', 'Hello World!');
	}
}

export { events };
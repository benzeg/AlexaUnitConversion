import * as SkillService from './lib/conversionService.js';

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
		const val = parseFloat(this.event.request.intent.slots.valOne.value);
		const convertingUnit = this.event.request.intent.slots.unitOne.value;
		const targetUnit = this.event.request.intent.slots.unitTwo.value;
		//const convertedResult = SkillService.convertor(val, convertingUnit, targetUnit)
		this.emit(':tell', val);
	}
}

export { events };
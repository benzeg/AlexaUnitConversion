import * as SkillService from './lib/conversionService.js';
import * as ResponseService from './conversation/response.js';
import * as Unit from './lib/unitObject.js';
import * as Validate from './lib/exceptionHandler.js';

const events = {
	LaunchRequest: function() {
		this.emit('SayHello')
	},
	SayHello: function() {
		this.emit(':ask', "Hello, I can help you answer questions such as how many drams is in a pound, ask me a question");
	},
	Inquiry: function() {
		this.emit('ConvertUnit');
	},
	ConvertUnit: function() {
		let val = parseFloat(this.event.request.intent.slots.valOne.value);
		const convertingUnit = this.event.request.intent.slots.unitOne.value;
		const targetUnit = this.event.request.intent.slots.unitTwo.value;
	  const cuInfo = {unit: convertingUnit};
	  const tuInfo = {unit: targetUnit};
	  let err;

		try {
				//Converting Unit and Target Unit will be referred to as cu and tu
				//from here on out in variable names
				Validate.verifyUnitFamily(cuInfo, tuInfo);
				Validate.verifyInputNum(val); 
		} catch (e) {
			console.log(e);
			err = e.message;
		}

		if (err) {
			return this.emit(':tell', err);
		}

		val = parseFloat(val)
		Unit.build(cuInfo, val);
		if (cuInfo.meta.family === 'volume' && (tuInfo.unit === 'ounce' || tuInfo.unit === 'fluid')) {
			tuInfo.unit = 'fluid ounce';
		}
		Unit.build(tuInfo);

		const convertedResult = SkillService.convertor(cuInfo, tuInfo);
		const response = ResponseService.generateSentence(val, convertingUnit, convertedResult);

		return this.emit(':tell', response);
	}
}

export { events };
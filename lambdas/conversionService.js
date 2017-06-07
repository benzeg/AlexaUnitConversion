import * as Unit from './ref/ref.js';

const convertor = (val, convertingUnit, targetUnit) => {
	
}

const InputException = function(message) {
	this.message = message;
	this.name = 'InputException';
}

const verifyUnitFamily = (unit, cb) => {
	//error catching
	let err;
	if (!Unit.unitLib[convertingUnit]) {
		err = 'converting unit not found';
	}
	if (!Unit.unitLib[targetUnit]) {
		err = 'target unit not found';
	}
	
	if (convertingUnit === targetUnit) {
		err = 'you gave me the same units of measurement';
	}
	if (Unit.unitLib[convertingUnit].family !== Unit.unitLib[targetUnit].family) {
		err = `${convertingUnit} cannot be converted to ${targetUnit}, ${convertingUnit}
					is used to measure ${Unit.unitLib[convertingUnit].family} while ${targetUnit} is used to measure ${Unit.unitLib[targetUnit].family}`;
	}

	if (err) {
		throw new InputException(err);
	} else {
		//return unit family if no error
		return Unit.unitLib[convertingUnit].family;
	}
}

const verifyInputNum = (val) => {
	let err;
	const num = parseFloat(val);
	if (isNaN(num)) {
		err = `you gave me an invalid number of ${convertingUnit} to convert`;
		throw new InputException(err);
	} else {
		//return the float parsed number
		return num;
	}
}
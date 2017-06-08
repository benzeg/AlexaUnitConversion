import * as Unit from './unitObject.js';

const InputException = function(message) {
	this.message = message;
	this.name = 'InputException';
}

const verifyUnitFamily = (convertingUnit, targetUnit) => {
	//error catching
	let err;
	if (!Unit.familyIdentifier[convertingUnit]) {
		err = 'converting unit not found';
	}
	if (!Unit.familyIdentifier[targetUnit]) {
		err = 'target unit not found';
	}
	
	if (convertingUnit === targetUnit) {
		err = 'you gave me the same units of measurement';
	}
	if (Unit.familyIdentifier[convertingUnit].family !== Unit.familyIdentifier[targetUnit].family) {
		err = `${convertingUnit} cannot be converted to ${targetUnit}, ${convertingUnit}
					is used to measure ${Unit.failyIdentifier[convertingUnit].family} while ${targetUnit} is used to measure ${Unit.failyIdentifier[targetUnit].family}`;
	}

	if (err) {
		throw new InputException(err);
	} else {
		//return unit family if no error
		return {
			cu: Unit.familyIdentifier[convertingUnit],
			tu: Unit.familyIdentifier[targetUnit]
		};
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

export { verifyUnitFamily, verifyInputNum};
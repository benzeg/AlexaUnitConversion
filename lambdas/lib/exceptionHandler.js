import * as Unit from './unitObject.js';

const InputException = function(message) {
	this.message = message;
	this.name = 'InputException';
}

const checkPlural = (unitObj) => {
	if ( unitObj.unit === 'feet') {
		unitObj.unit = 'foot';
		return unitObj.unit;
	}

	if (unitObj.unit[unitObj.unit.length -1] === 's') {
		unitObj.unit = unitObj.unit.slice(0, unitObj.unit.length - 1);
		if (Unit.familyIdentifier[unitObj.unit]) {
			return unitObj.unit;
		}
		if (unitObj.unit[unitObj.unit.length -1] === 'e') {
			unitObj.unit = unitObj.unit.slice(0, unitObj.unit.length -1);
			if (Unit.familyIdentifier[unitObj.unit]) {
				return unitObj.unit;
			}
		}
	}

	return false;
}

const verifyUnitFamily = (cuObj, tuObj) => {
	//error catching
	let err;


	if (!Unit.familyIdentifier[cuObj.unit] && !checkPlural(cuObj)) {
		err = 'converting unit not found';
	}

	if (!Unit.familyIdentifier[tuObj.unit] && !checkPlural(tuObj)) {
		err = 'target unit not found';
	}

	
	if (cuObj.unit === tuObj.unit) {
		err = 'you gave me the same units of measurement';
	}
	if (Unit.familyIdentifier[cuObj.unit].family !== Unit.familyIdentifier[tuObj.unit].family) {
		err = `${convertingUnit} cannot be converted to ${targetUnit}, ${convertingUnit}
					is used to measure ${Unit.failyIdentifier[convertingUnit].family} while ${targetUnit} is used to measure ${Unit.failyIdentifier[targetUnit].family}`;
	}

	if (err) {
		throw new InputException(err);
	} else {
		//return unit family if no error
		return true;
	}
}

const verifyInputNum = (val) => {
	let err;
	const num = parseFloat(val);
	if (isNaN(num)) {
		err = `you gave me an invalid number to convert`;
		throw new InputException(err);
	} else {
		//return the float parsed number
		return true;
	}
}

export { checkPlural, verifyUnitFamily, verifyInputNum};
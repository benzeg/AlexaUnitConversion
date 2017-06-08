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
	} else if (!Unit.familyIdentifier[tuObj.unit] && !checkPlural(tuObj)) {
		if (tuObj.unit === 'fluid') {
			tuObj.unit = 'fluid ounce'
		} else {
			err = 'target unit not found';
		}
	} else if (cuObj.unit === tuObj.unit) {
		err = 'you gave me the same units of measurement';
	} else if (Unit.familyIdentifier[cuObj.unit].family !== Unit.familyIdentifier[tuObj.unit].family) {
		if (Unit.familyIdentifier[cuObj.unit].family === 'volume' && (tuObj.unit === 'ounce' || tuObj.unit.inclu)) {
			tuObj.unit = 'fluid ounce';
		} else {
			err = `${cuObj.unit} cannot be converted to ${tuObj.unit}, ${cuObj.unit} is used to measure ${Unit.familyIdentifier[cuObj.unit].family} while ${tuObj.unit} is used to measure ${Unit.familyIdentifier[tuObj.unit].family}`;
		}
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
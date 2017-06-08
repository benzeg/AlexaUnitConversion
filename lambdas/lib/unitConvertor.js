const toBase = (unitObj) => {
	if (unitObj.unit === unitObj.system.base) {
		return unitObj;
	}

	if (unitObj.system.coeff === 'base10') {
		unitObj.val *= Math.pow(10, unitObj.system[unitObj.unit]);
	}

	if (unitObj.system.book.coeff === 'fixed') {
		unitObj.val *= unitObj.system[unitObj.unit];
	}

	return unitObj;
}

export { toBase };

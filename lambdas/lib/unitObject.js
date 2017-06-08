const unitLibrary = { 
	length: {
		metric: {
			base: 'meter',
			meter: 1,
			coeff: 'base10',
			micrometer: -6,
			millimeter: -3,
			centimeter: -2,
			decimeter: -1,
			kilometer: 3,
			conversion: {
				imperial: 3.28084
			}
		},
		imperial: {
			base: 'foot',
			coeff: 'fixed',
			foot: 1,
			inch: 1 / 12,
			yard: 3,
			mile: 5280,
			conversion: {
				metric: 1 / 3.28084
			}
		}
	}
};

const familyIdentifier = {
	meter: {family: 'length', system: 'metric'},
	micrometer: {family: 'length', system: 'metric'},
	millimeter: {family: 'length', system: 'metric'},
	centimeter: {family: 'length', system: 'metric'},
	decimeter: {family: 'length', system: 'metric'},
	kilometer: {family: 'length', system: 'metric'},
	foot: {family: 'length', system: 'imperial'},
	inch: {family: 'length', system: 'imperial'},
	yard: {family: 'length', system: 'imperial'},
	mile: {family: 'length', system: 'imperial'}
}

const build = (unit, val) => {
	const unitObj = {};
	unitObj.unit = unit;
	unitObj.val = val ? val: 0;
	unitObj.val = val;
	unitObj.meta= familyIdentifier[unit];
	unitObj.system = unitLibrary[unitObj.meta.family][unitObj.meta.system];
	return unitObj;
}

export { unitLibrary, familyIdentifier, build };
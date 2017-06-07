const length = {
	metric: {
		base: 'meter',
		meter: 1,
		micrometer: -6,
		millimeter: -3,
		centimeter: -2,
		decimeter: -1,
		kilometer: 3,
	},
	imperial: {
		base: 'foot',
		foot: 1,
		inch: 1 / 12,
		yard: 3,
		mile: 5280
	},
	conversionRate: {
		metricImperial: 3.28084
	}
}

const unitLib = {
	meter: {unit: 'length', system: 'metric'},
	micrometer: {unit: 'length', system: 'metric'},
	millimeter: {unit: 'length', system: 'metric'},
	centimeter: {unit: 'length', system: 'metric'},
	decimeter: {unit: 'length', system: 'metric'},
	kilometer: {unit: 'length', system: 'metric'},
	foot: {unit: 'length', system: 'imperial'},
	inch: {unit: 'length', system: 'imperial'},
	yard: {unit: 'length', system: 'imperial'},
	mile: {unit: 'length', system: 'imperial'}
}

export { length, unitLib };
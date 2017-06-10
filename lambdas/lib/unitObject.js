const unitLibrary = { 
	length: {
		metric: {
			base: 'meter',
			coeff: 'base10',
			meter: 0,
			micrometer: -6,
			millimeter: -3,
			cm: -2,
			centimeter: -2,
			decimeter: -1,
			kilometer: 3,
			conversion: {
				imperial: (x) => {return x * 3.28084}
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
				metric: (x) => {return x / 3.28084}
			}
		}
	},
	volume: {
		metric: {
			base: 'milliliter',
			coeff: 'base10',
			milliliter: 0,
			centiliter: 1,
			deciliter: 2,
			liter: 3,
			hectoliter: 5,
			conversion: {
				imperial: (x) => { return x / 5.91939}
			} 
		},
		imperial: {
			base: 'teaspoon',
			coeff: 'fixed',
			teaspoon: 1,
			tablespoon: 3,
			'fluid ounce': 6,
			cup: 48,
			gill: 24,
			pint: 96,
			quart: 192,
			gallon: 768,
			conversion: {
				metric: (x) => { return x * 5.91939}
			}
		}
	},
	angle: {
		radian: {
			base: 'radian',
			coeff: 'fixed',
			radian: 1,
			conversion: {
				degree: (x) => { return x * 57.295}
			}
		},
		degree: {
			base: 'degree',
			coeff: 'fixed',
			degree: (x) => { return x * 0.01745329}
		}
	},
	time: {
		metric: {
			base: 'second',
			coeff: 'fixed',
			second: 1,
			minute: 60,
			hour: 360,
			day: 86400,
			year: 86400 * 365.24,
			conversion: {
				metric: (x) => {return x}
			}
		}
	},
	mass: {
		metric: {
			base: 'gram',
			coeff: 'base10',
			milligram: -3,
			gram: 0,
			kilogram: 3,
			ton: 6,
			conversion: {
				imperial: (x) => { return x / 1.77 }
			}
		},
		imperial: {
			base: 'dram',
			coeff: 'fixed',
			grain: 0.0365713,
			dram: 1,
			ounce: 16,
			pound: 256,
			conversion: {
				metric: (x) => { return x * 1.77 }
			}
		}
	},
	temperature: {
		kelvin: {
			base: 'kelvin',
			coeff: 'linear',
			kelvin: 1,
			conversion: {
				celsius: (x) => { return x - 273.15 },
				fahrenheit: (x) => { return x*(1.8) - 459.67 }
			}
		},
		celsius: {
			base: 'celsius',
			coeff: 'linear',
			celsius: 1,
			conversion: {
				kelvin: (x) => { return x + 273.15 },
				fahrenheit: (x) => { return x * (1.8) + 32}
			}
		}
	}
};

const familyIdentifier = {
	meter: {family: 'length', system: 'metric'},
	micrometer: {family: 'length', system: 'metric'},
	millimeter: {family: 'length', system: 'metric'},
	cm: {family: 'length', system: 'metric'},
	centimeter: {family: 'length', system: 'metric'},
	decimeter: {family: 'length', system: 'metric'},
	kilometer: {family: 'length', system: 'metric'},
	foot: {family: 'length', system: 'imperial'},
	inch: {family: 'length', system: 'imperial'},
	yard: {family: 'length', system: 'imperial'},
	mile: {family: 'length', system: 'imperial'},
	 milliliter: { family: 'volume', system: 'metric' },
  centiliter: { family: 'volume', system: 'metric' },
  deciliter: { family: 'volume', system: 'metric' },
  liter: { family: 'volume', system: 'metric' },
  hectoliter: { family: 'volume', system: 'metric' },
  teaspoon: { family: 'volume', system: 'imperial' },
  tablespoon: { family: 'volume', system: 'imperial' },
  'fluid ounce': { family: 'volume', system: 'imperial' },
  cup: { family: 'volume', system: 'imperial' },
  gill: { family: 'volume', system: 'imperial' },
  pint: { family: 'volume', system: 'imperial' },
  quart: { family: 'volume', system: 'imperial' },
  gallon: { family: 'volume', system: 'imperial' },
  radian: { family: 'angle', system: 'radian' },
  degree: { family: 'angle', system: 'degree' },
  second: { family: 'time', system: 'metric' },
  minute: { family: 'time', system: 'metric' },
  hour: { family: 'time', system: 'metric' },
  day: { family: 'time', system: 'metric' },
  year: { family: 'time', system: 'metric' },
  milligram: { family: 'mass', system: 'metric' },
  gram: { family: 'mass', system: 'metric' },
  kilogram: { family: 'mass', system: 'metric' },
  ton: { family: 'mass', system: 'metric' },
  grain: { family: 'mass', system: 'imperial' },
  dram: { family: 'mass', system: 'imperial' },
  ounce: { family: 'mass', system: 'imperial' },
  pound: { family: 'mass', system: 'imperial' },
  kelvin: { family: 'temperature', system: 'kelvin' },
  celsius: { family: 'temperature', system: 'celsius' }
}

const build = (unitObj, val) => {
	unitObj.val = val ? val: 0;
	unitObj.val = val;
	unitObj.meta= familyIdentifier[unitObj.unit];
	unitObj.system = unitLibrary[unitObj.meta.family][unitObj.meta.system];
	return unitObj;
}

export { unitLibrary, familyIdentifier, build };
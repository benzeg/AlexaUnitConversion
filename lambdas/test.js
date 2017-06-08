import * as Service from './eventHandlers.js';

// console.log(Service.events.ConvertUnit('bool', 'feet', 'meter'));

import * as Unit from './lib/unitObject.js';

var obj = Unit.unitLibrary;
var resObj = {};
for (var key in obj) {
	let family = key;
	for (var ney in obj[key]) {
		let system = ney;
		console.log(system)
		for (var hey in obj[key][ney]) {
			console.log(hey)
			if (hey !== 'base' && hey !== 'coeff' && hey !== 'conversion') {
				let newObj = {family: family, system: system};
				resObj[hey] = newObj;
			}
		}
	}
}

console.log(resObj);
const generateSentence = (val, convertingUnit, tuInfo) => {
	//just add s for now
	if (tuInfo.val !== 1) {
		if (tuInfo.unit === 'foot') {
			tuInfo.unit = 'feet';
		} else if (tuInfo.unit === 'inch') {
			tuInfo.unit = 'inches';
		} else {
			tuInfo.unit = tuInfo.unit.concat('s');
		}

	}

	return `${val} ${convertingUnit} converts to ${tuInfo.val} ${tuInfo.unit}`;
}

export { generateSentence }
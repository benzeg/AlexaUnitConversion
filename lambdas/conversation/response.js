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

	if (tuInfo.val === 0) {
		return `${val} ${convertingUnit} is too small to be converted to ${tuInfo.unit}`;
	}

	return `${val} ${convertingUnit} converts to ${tuInfo.val} ${tuInfo.unit}.`;
}

export { generateSentence }
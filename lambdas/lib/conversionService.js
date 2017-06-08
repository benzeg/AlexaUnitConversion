import * as Validate from './exceptionHandler.js';
import * as ConvertTools from './unitConvertor.js';
import * as Unit from './unitObject.js';

const convertor = (cuInfo, tuInfo) => {

	//call on convert to base unit tool to make conversion if necessary
	//since we'll be using the base unit number to convert between unit systems
	ConvertTools.toBase(cuInfo);
	ConvertTools.unitToUnit(cuInfo, tuInfo);
	ConvertTools.baseToUnit(tuInfo);
	ConvertTools.round(tuInfo);
	return tuInfo;
}

export { convertor };
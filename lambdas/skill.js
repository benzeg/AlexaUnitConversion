import * as Alexa from 'alexa-sdk';
import * as Handlers from './eventHandlers';

const skillHandler = (event, context, callback) => {
	//declare alexa object
	const alexa = Alexa.handler(event, context, callback);

	//register event handlers to alexa
	alexa.registerHandlers(handlers);

	//start alexa
	alexa.excute();
}

export default skillHandler
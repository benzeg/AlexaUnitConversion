import * as Alexa from 'alexa-sdk';
import * as Handlers from './eventHandlers';
import * as Cert from '../alexaID/cert.js';

const handler = (event, context, callback) => {
	//declare alexa object
	const alexa = Alexa.handler(event, context, callback);
	//Fill in with app id later
	alexa.appId = Cert.id;

	//register event handlers to alexa
	alexa.registerHandlers(Handlers.events);

	//start alexa
	alexa.execute();
}

export { handler };
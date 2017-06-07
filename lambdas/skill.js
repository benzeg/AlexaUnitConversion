import * as Alexa from 'alexa-sdk';
import * as Handlers from './eventHandlers';
import * as Cert from '../alexaID/cert.js';

const handler = (event, context, callback) => {
	//declare alexa object
	const alexa = Alexa.handler(event, context, callback);
	//Fill in with app id later
	alexa.appId = Cert.id;
	console.log('alexa id', alexa.appId);
	console.log('event', event);
	console.log('context', context);
	//register event handlers to alexa
	alexa.registerHandlers(Handlers.events);
	console.log('past handler register')
	//start alexa
	alexa.execute();
}

export { handler };
import * as Alexa from 'alexa-sdk';
import * as Handlers from './eventHandlers';

const handler = (event, context, callback) => {
	//declare alexa object
	const alexa = Alexa.handler(event, context, callback);
	//Fill in with app id later
	//alexa.appId = APP_ID

	//register event handlers to alexa
	alexa.registerHandlers(Handlers.events);

	//start alexa
	alexa.execute();
}

export default skillHandler
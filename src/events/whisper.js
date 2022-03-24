module.exports = {
	name: 'whisper',
	execute(client, from, userstate, message, self) {
		if (self) return;
		if (from.slice(1) === process.env.DEV_CHANNEL_NAME) {
			client.say(process.env.CHANNEL_NAME, `${message}`);
		} else {
			client.whisper(process.env.DEV_CHANNEL_NAME, `${userstate.username} m'a laissé un message privé.`);
		}
	}
};

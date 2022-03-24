module.exports = {
	name: 'subscribers',
	execute(client, channel, enabled) {
		if (enabled) client.say(channel, `⚠️ Le chat est maintenant réservé aux vrais *Kshhh* je répète *Kshhh* Le chat est réservé aux vrais !`);
		if (!enabled) client.say(channel, `✅ C'est reparti les Zouaves, le Mode sub only a été désactivé !`);
	}
};

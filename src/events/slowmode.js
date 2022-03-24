module.exports = {
	name: 'slowmode',
	execute(client, channel, enabled, length) {
		if (enabled) client.say(channel, `⚠️ Du calme les Zodiacs, le Mode lent a été activé !`);
	  if (!enabled) client.say(channel, `✅ Let's go les Zodiacs, le Mode lent a été désactivé !`);
	}
};

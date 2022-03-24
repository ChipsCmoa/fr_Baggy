module.exports = {
	name: 'hosting',
	execute(client, channel, target, viewers) {
		console.log("//////////////////////HOSTING//////////////////////");
	  console.log(target);
	  console.log(viewers);
	  console.log("");
	  client.say(channel, `Rendez-vous sur la chaîne https://twitch.tv/${target} ! Envoyons-lui tous un maximum d'amour <3`);
	}
};

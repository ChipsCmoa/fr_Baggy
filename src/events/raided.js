module.exports = {
	name: 'raided',
	execute(client, channel, username, viewers) {
		console.log("//////////////////////RAIDED//////////////////////");
		console.log(username);
		console.log(viewers);
		console.log("");
		if (viewers === "0") {
			client.say(channel, `@${username}, merci pour le raid mon bubu ! Mais tu sais, un raid c'est pour ramener des viewers...`);
		} else if (viewers === "1") {
			client.say(channel, `Merci pour le raid @${username} ! Bienvenue à toi et ton unique viewer !`);
			client.say(channel, `C'est pas toi au moins, si ?`);
		} else if (viewers > 99) {
			client.say(channel, `Wow ! Merci @${username} pour le raid ! Bienvenue à toi et tes ${viewers} viewers !!`);
			client.say(channel, `Prenez place, faites comme chez moi.`);
		} else {
			client.say(channel, `Merci @${username} pour le raid ! Bienvenue à toi et tes ${viewers} viewers !`);
			client.say(channel, `Les Zodiacs, accueillez-les comme il se doit !`);
		}

	}
};

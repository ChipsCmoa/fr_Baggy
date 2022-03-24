module.exports = {
	name: 'cheer',
	execute(client, channel, userstate, message) {
		console.log("//////////////////////CHEER//////////////////////");
		console.log(userstate);
		console.log(message);
		console.log("");
		let bits = userstate.bits;
		let user = userstate.username;
		let msg1 = [
			'Ça paiera les croquettes de Baggy, il avait un peu faim ces temps-ci',
			'Je vais pouvoir m\'acheter un nouveau FreeGun, celui que j\'ai a des trous. J\'le mettrai dans le décor en souvenir.',
			'YES ! Les nouilles au poulet, c\'est CIAO !'
		];
		let msg2 = [
			'Je vais bientôt avoir mon 3ème porte-avion',
			'Je vais pouvoir racheter un vrai PC, c\'est cool',
			'Bon par contre il en manque si je veux un Heirloom sur Apex...'
		];
		let random = Math.floor(Math.random()*msg.length);

		if (bits == 1) {
			client.say(channel, `@${user} mon précieux... Merci ! frzodBaggylove3`);
		} else if (bits > 1 && bits < 2000) {
			client.say(channel, `MAIS NON ! frzodBaggyhappy Merci pour les ${bits} bits @${user}, tu régales ! frzodBaggylove2`);
		} else if (bits >= 2000 && bits < 5000) {
			client.say(channel, `frzodBaggywat2 WOW ! Merci @${user} pour tes ${bits} bits !! frzodBaggylove frzodBaggylove frzodBaggylove`);
			client.say(channel, `${msg1[random]}`);
		} else if (bits >= 5000) {
			client.say(channel, `wtf ? frzodBaggy1 WTF WTF WTF ??? frzodBaggywat1 frzodBaggywat1 frzodBaggywat1 jbvjbvjbvjbv MERCI MON BUBU ! frzodYeux`);
			client.say(channel, `${msg2[random]}`);
		}
	} //FIN EXECUTE
};

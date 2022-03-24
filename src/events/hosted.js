module.exports = {
	name: 'hosted',
	execute(client, channel, username, viewers, autohost) {
		console.log("//////////////////////HOSTED//////////////////////");
	  console.log(username);
	  console.log(viewers);
	  console.log(autohost);
	  console.log("");
	  if (viewers == 0) {
	    client.say(channel, `@${username}, merci pour le host mon bubu ! Mais si personne n'est là pour regarder... frzodBaggycry3`);
	  } else if (viewers == 1) {
	    client.say(channel, `Merci pour le host @${username} ! Bienvenue à toi et ton unique viewer !`);
	    client.say(channel, `C'est pas toi au moins, si ?`);
	  } else if (viewers >= 100) {
	    client.say(channel, `Wow ! Merci @${username} pour le host ! Bienvenue à toi et tes ${viewers} viewers !!`);
	  } else {
	    client.say(channel, `Merci @${username} pour le host ! Bienvenue à toi et tes ${viewers} viewers !`);
	  }

	}
};

const fs = require('fs');

module.exports = {
	name: 'chat',
	execute(client, channel, params, txt, self) {
		/*
		//////////// DEBUT LOGS-CHAT
		let timestamp;
		if (self) timestamp = String(new Date().getTime());
		if (!self) timestamp = params["tmi-sent-ts"];
		const content = timestamp.slice(0, -3) + "," + channel.slice(1) + "," + params["display-name"] + "," + txt + "\n";
		fs.appendFile('././logs/logs-chat.csv', content, function (err) {
			if (err) throw err;
		});
		//////////// FIN LOGS-CHAT
		*/
		if (self) return;
		if (params.username === "nightbot" && txt === "Oh baggy... T'es dégueu !") client.say(channel, `Ce n'était pas moiiiii frzodBaggycry1`);

		//////////// COMMANDS
		if (txt.startsWith(process.env.PREFIX)) {
			if (params.mod || params.username === channel.slice(1)) {
				const args = txt.slice(process.env.PREFIX.length).trim().split(/ +/g);
				const command = args.shift().toLowerCase();
				const cmd = client.commands.get(command);
				if (!cmd) return;
				cmd.run(client, channel, params, txt, self);
			}
		}
	}
};
/*
console.log("//////////////////////NOUVEAU MESSAGE//////////////////////");
console.log(params);
console.log(txt);
console.log("");
*/

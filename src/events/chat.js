module.exports = {
	name: 'chat',
	execute(client, channel, params, txt, self) {
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

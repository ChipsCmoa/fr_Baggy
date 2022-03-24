const fs = require('fs');

module.exports = {
	name: 'ban',
	execute(client, channel, username, reason, userstate) {
		console.log("//////////////////////BAN//////////////////////");
		console.log(channel);
		console.log(username);
		console.log(reason);
		console.log(userstate);
		console.log("");
	}
};

/*
//////////////////////BAN//////////////////////
#fr_zod
romainn___
null
{
'room-id': '252428210',
'target-user-id': '755200800',
'tmi-sent-ts': '1647525556785'
}
*/

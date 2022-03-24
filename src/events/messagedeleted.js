module.exports = {
	name: 'messagedeleted',
	execute(client, channel, username, deletedMessage, userstate) {
		console.log("//////////////////////MESSAGEDELETED//////////////////////");
    console.log(username);
    console.log(deletedMessage);
    console.log(userstate);
    console.log("");
	}
};
/*
//////////////////////messagedeleted//////////////////////
bicratte
Peux-tu me faire l’amour?
{
  login: 'bicratte',
  'room-id': null,
  'target-msg-id': 'f9189e95-aaf9-48b2-985d-5cdc8d5625ed',
  'tmi-sent-ts': '1647525186176',
  'message-type': 'messagedeleted'
}
*/

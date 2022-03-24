module.exports = {
	name: 'timeout',
	execute(client, channel, username, reason, duration, userstate) {
		console.log("//////////////////////TIMEOUT//////////////////////");
		console.log(channel);
    console.log(username);
		console.log(reason);
		console.log(duration);
    console.log(userstate);
    console.log("");
	}
};
/*
//////////////////////timeout//////////////////////
#fr_zod
anonymous_zy0
null
600
{
  'ban-duration': '600',
  'room-id': '252428210',
  'target-user-id': '644323223',
  'tmi-sent-ts': '1647525102155'
}
*/

module.exports = {
	name: 'submysterygift',
	execute(client, channel, username, numbOfSubs, methods, userstate) {
		console.log("//////////////////////SUBMYSTERYGIFT//////////////////////");
		console.log(channel);
		console.log(username);
		console.log(numbOfSubs);
		console.log(methods);
		console.log(userstate);
		console.log("");
		let senderCount = ~~userstate["msg-param-sender-count"];
		if (numbOfSubs == 1) {
			client.say(channel, `Merci @${username} pour l'abonnement offert ! frzodBaggylove3`);
			return;
		} else if (numbOfSubs >= 2 && numbOfSubs < 6) {
			client.say(channel, `Merci @${username} pour les ${numbOfSubs} abonnements offerts, tu as fait des heureux ! frzodBaggylove2`);
		} else if (numbOfSubs >= 6 && numbOfSubs < 10) {
			client.say(channel, `Merci pour ta générosité @${username} ! Les Zodiacs, envoyez-lui de l'amour ! frzodBaggylove`);
		} else if (numbOfSubs >= 10 && numbOfSubs < 20) {
			client.say(channel, `frzodBaggywat2 Waaaah ! Merci @${username} pour les ${numbOfSubs} abonnements offerts ! frzodBaggylove Les Zodiacs, envoyez-lui de l'amour ! frzodBaggylove2 frzodBaggylove2`);
		} else {
			client.say(channel, `frzodBaggywat2 MAIS TU ES FOU ? Merci @${username}, merci pour la commu, MERCI ! frzodBaggylove2 Les Zodiacs, spammez les coeurs ! frzodBaggylove frzodBaggylove`);
			client.say(channel, `!coeur`);
		}
		client.say(channel, `Les Zodiacs, pensez bien à remercier si vous avez reçu un cadeau, c'est important frzodBaggylove2`);
	}
};
/*

//////////////////////submysterygift//////////////////////
#fr_zod
Ezehkielll
1
{ prime: false, plan: '1000', planName: null }
{
  'badge-info': { subscriber: '1' },
  badges: { subscriber: '0' },
  color: '#0000FF',
  'display-name': 'Ezehkielll',
  emotes: null,
  flags: null,
  id: '019f0724-0ad7-45b9-b071-91d08ce44fca',
  login: 'ezehkielll',
  mod: false,
  'msg-id': 'submysterygift',
  'msg-param-mass-gift-count': true,
  'msg-param-origin-id': '84 18 4c 28 87 2b 24 2f 56 73 6c 15 97 90 c3 03 dd 1e 93 49',
  'msg-param-sender-count': true,
  'msg-param-sub-plan': '1000',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': "Ezehkielll is gifting 1 Tier 1 Subs to fr_zod's community! They've gifted a total of 1 in the channel!",
  'tmi-sent-ts': '1647524672075',
  'user-id': '484914512',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/1',
  'badges-raw': 'subscriber/0',
  'message-type': 'submysterygift'
}


//////////////////////submysterygift//////////////////////
#fr_zod
pyperftysl
1
{ prime: false, plan: '1000', planName: null }
{
  'badge-info': { subscriber: '1' },
  badges: { subscriber: '0' },
  color: '#8A2BE2',
  'display-name': 'pyperftysl',
  emotes: null,
  flags: null,
  id: '961ea00d-d14f-4d7f-8f6f-3e3ab2646722',
  login: 'pyperftysl',
  mod: false,
  'msg-id': 'submysterygift',
  'msg-param-mass-gift-count': true,
  'msg-param-origin-id': '64 41 98 30 37 b7 6b da e3 25 bc 5e 4b 26 66 ef f3 7f 56 b5',
  'msg-param-sender-count': true,
  'msg-param-sub-plan': '1000',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': "pyperftysl is gifting 1 Tier 1 Subs to fr_zod's community! They've gifted a total of 1 in the channel!",
  'tmi-sent-ts': '1647540589350',
  'user-id': '744324487',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/1',
  'badges-raw': 'subscriber/0',
  'message-type': 'submysterygift'
}

//////////////////////submysterygift//////////////////////
#fr_zod
Mr_k60130
1
{ prime: false, plan: '1000', planName: null }
{
  'badge-info': { subscriber: '1' },
  badges: { subscriber: '0', premium: '1' },
  color: '#000000',
  'display-name': 'Mr_k60130',
  emotes: null,
  flags: null,
  id: '69aaefb9-feaf-4a91-ba94-45a0152d9459',
  login: 'mr_k60130',
  mod: false,
  'msg-id': 'submysterygift',
  'msg-param-mass-gift-count': true,
  'msg-param-origin-id': '59 40 20 ce 3f 5a c9 bc a8 93 8b 26 6e b1 78 bd 7f 0c 61 0c',
  'msg-param-sender-count': true,
  'msg-param-sub-plan': '1000',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': "Mr_k60130 is gifting 1 Tier 1 Subs to fr_zod's community! They've gifted a total of 1 in the channel!",
  'tmi-sent-ts': '1647540272030',
  'user-id': '88354038',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/1',
  'badges-raw': 'subscriber/0,premium/1',
  'message-type': 'submysterygift'
}

*/

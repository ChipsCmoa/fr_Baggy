module.exports = {
	name: 'resub',
	execute(client, channel, username, months, message, userstate, methods) {
		console.log("//////////////////////RESUB//////////////////////");
		console.log(username);
		console.log(months);
		console.log(message);
		console.log(userstate);
		console.log(methods);
		console.log("");
		let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
		if (cumulativeMonths <= 6) {
			client.say(channel, `Merci @${username} pour tes ${cumulativeMonths} mois ! frzodBaggylove2`);
		} else if (cumulativeMonths <= 12) {
			client.say(channel, `Merci pour ton soutien @${username} ! Déjà ${cumulativeMonths} mois ? Tu feras bientôt partie des murs ! frzodBaggylove`);
		} else {
			client.say(channel, `frzodBaggywat2 Waaaaaaah ! Regardez @${username}, ça c'est un vrai Zodiac ! Il est là et il le montre ! frzodBaggylove frzodBaggylove`);
			client.say(channel, `${cumulativeMonths} mois, ça se fête, non ?`);
		}
	}
};
/*
//////////////////////resub//////////////////////
Whaynka
2
Yey
{
  'badge-info': null,
  badges: { premium: '1' },
  color: '#0000FF',
  'display-name': 'Whaynka',
  emotes: null,
  flags: null,
  id: '6da416e4-b0cd-4a1e-ae86-ebc5ccb997b0',
  login: 'whaynka',
  mod: false,
  'msg-id': 'resub',
  'msg-param-cumulative-months': '2',
  'msg-param-months': false,
  'msg-param-multimonth-duration': false,
  'msg-param-multimonth-tenure': false,
  'msg-param-should-share-streak': true,
  'msg-param-streak-months': '2',
  'msg-param-sub-plan-name': 'Le Zodiac',
  'msg-param-sub-plan': 'Prime',
  'msg-param-was-gifted': 'false',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': "Whaynka subscribed with Prime. They've subscribed for 2 months, currently on a 2 month streak!",
  'tmi-sent-ts': '1647539158171',
  'user-id': '478592823',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': null,
  'badges-raw': 'premium/1',
  'message-type': 'resub'
}
{ prime: true, plan: 'Prime', planName: 'Le Zodiac' }

//////////////////////resub//////////////////////
Iam_Mel_
0
Omg 3 mois d'amouuur Zod ❤ Et de bouffe! 🍕🍟🍔🍿 Team Zodiackque ici 🥰 T'as vu Batman ? 🦇👀👀 Vive Baggy baguette pas trop cuite 😻😻
{
  'badge-info': { subscriber: '3' },
  badges: { subscriber: '3', 'sub-gift-leader': '1' },
  color: '#FF69B4',
  'display-name': 'Iam_Mel_',
  emotes: null,
  flags: null,
  id: '8fd9f865-59a1-4396-8c0a-c0b4e22bac87',
  login: 'iam_mel_',
  mod: false,
  'msg-id': 'resub',
  'msg-param-cumulative-months': '3',
  'msg-param-months': false,
  'msg-param-multimonth-duration': false,
  'msg-param-multimonth-tenure': false,
  'msg-param-should-share-streak': false,
  'msg-param-sub-plan-name': 'Le Zodiac',
  'msg-param-sub-plan': '1000',
  'msg-param-was-gifted': 'false',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': "Iam_Mel_ subscribed at Tier 1. They've subscribed for 3 months!",
  'tmi-sent-ts': '1647533025677',
  'user-id': '684261477',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/3',
  'badges-raw': 'subscriber/3,sub-gift-leader/1',
  'message-type': 'resub'
}
{ prime: false, plan: '1000', planName: 'Le Zodiac' }
*/

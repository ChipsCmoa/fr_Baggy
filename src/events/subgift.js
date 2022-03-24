module.exports = {
	name: 'subgift',
	execute(client, channel, username, streakMonths, recipient, methods, userstate) {

		console.log("//////////////////////SUBGIFT//////////////////////");
		console.log(username);
		console.log(streakMonths);
		console.log(recipient);
		console.log(methods);
		console.log(userstate);
		console.log("");
return;
		let senderCount = ~~userstate["msg-param-sender-count"];
		if (methods.plan === "1000") client.say(channel, `MAIS NON ! Merci @${username} pour l'abonnement offert à ${recipient} ! frzodBaggylove3`);
		if (methods.plan === "2000") client.say(channel, `Merci @${username} pour l'abonnement offert à ${recipient} ! frzodBaggylove3 C'est un Tier 2 en plus !!`);
		if (methods.plan === "3000") client.say(channel, `@${username} Quelle générosité mon gourmand ! Merci pour le Tier 3 offert à ${recipient} ! frzodBaggylove3`);
		if (senderCount >= 50 && senderCount < 100) {
			client.say(channel, `Déjà ${senderCount} abonnements offerts, tu es généreux ! (Et riche !)`);
		} else if (senderCount >= 100 && senderCount < 200) {
			client.say(channel, `${senderCount} abonnements offerts, tu es un mécène officiel de la chaine ! Merci pour ton soutien !`);
		} else if (senderCount >= 200) {
			client.say(channel, `J'ai bien lu "${senderCount} abonnements offerts" ? Mais tu es fou ! Merci @${username}, merci pour ton soutien et ta confiance !`);
		}
	}
};
/*
//////////////////////subgift//////////////////////
Dragmarrr
0
Ezehkielll
{ prime: false, plan: '1000', planName: 'Le Zodiac' }
{
'badge-info': { subscriber: '7' },
badges: { subscriber: '6', premium: '1' },
color: '#B22222',
'display-name': 'Dragmarrr',
emotes: null,
flags: null,
id: 'eee8acdc-b03b-4bd1-96fd-6f401c698b2b',
login: 'dragmarrr',
mod: false,
'msg-id': 'subgift',
'msg-param-gift-months': true,
'msg-param-months': true,
'msg-param-origin-id': 'd8 3d 81 0b 4c 9d 45 4b 5c 15 62 ea 04 19 12 ab 50 9a 22 7d',
'msg-param-recipient-display-name': 'Ezehkielll',
'msg-param-recipient-id': '484914512',
'msg-param-recipient-user-name': 'ezehkielll',
'msg-param-sender-count': '3',
'msg-param-sub-plan-name': 'Le Zodiac',
'msg-param-sub-plan': '1000',
'room-id': '252428210',
subscriber: true,
'system-msg': 'Dragmarrr gifted a Tier 1 sub to Ezehkielll! They have given 3 Gift Subs in the channel!',
'tmi-sent-ts': '1647524514607',
'user-id': '638763896',
'user-type': null,
'emotes-raw': null,
'badge-info-raw': 'subscriber/7',
'badges-raw': 'subscriber/6,premium/1',
'message-type': 'subgift'
}

//////////////////////subgift//////////////////////
Ezehkielll
0
RG_daydaykai
{ prime: false, plan: '1000', planName: 'Le Zodiac' }
{
'badge-info': { subscriber: '1' },
badges: { subscriber: '0' },
color: '#0000FF',
'display-name': 'Ezehkielll',
emotes: null,
flags: null,
id: '78830261-d79b-48ed-928f-e22d01da457c',
login: 'ezehkielll',
mod: false,
'msg-id': 'subgift',
'msg-param-gift-months': true,
'msg-param-months': true,
'msg-param-origin-id': '84 18 4c 28 87 2b 24 2f 56 73 6c 15 97 90 c3 03 dd 1e 93 49',
'msg-param-recipient-display-name': 'RG_daydaykai',
'msg-param-recipient-id': '100933575',
'msg-param-recipient-user-name': 'rg_daydaykai',
'msg-param-sender-count': false,
'msg-param-sub-plan-name': 'Le Zodiac',
'msg-param-sub-plan': '1000',
'room-id': '252428210',
subscriber: true,
'system-msg': 'Ezehkielll gifted a Tier 1 sub to RG_daydaykai!',
'tmi-sent-ts': '1647524672475',
'user-id': '484914512',
'user-type': null,
'emotes-raw': null,
'badge-info-raw': 'subscriber/1',
'badges-raw': 'subscriber/0',
'message-type': 'subgift'
}

//////////////////////subgift//////////////////////
pyperftysl
0
marie_psycho
{ prime: false, plan: '1000', planName: 'Le Zodiac' }
{
'badge-info': { subscriber: '1' },
badges: { subscriber: '0', 'sub-gifter': '1' },
color: '#8A2BE2',
'display-name': 'pyperftysl',
emotes: null,
flags: null,
id: '30a442fe-809f-4538-b746-87a292df1ba6',
login: 'pyperftysl',
mod: false,
'msg-id': 'subgift',
'msg-param-gift-months': true,
'msg-param-months': true,
'msg-param-origin-id': '2e b3 1d 66 01 7c 32 89 c1 5b 28 1a a1 dc 75 27 e1 ec 65 2b',
'msg-param-recipient-display-name': 'marie_psycho',
'msg-param-recipient-id': '226023846',
'msg-param-recipient-user-name': 'marie_psycho',
'msg-param-sender-count': '2',
'msg-param-sub-plan-name': 'Le Zodiac',
'msg-param-sub-plan': '1000',
'room-id': '252428210',
subscriber: true,
'system-msg': 'pyperftysl gifted a Tier 1 sub to marie_psycho! They have given 2 Gift Subs in the channel!',
'tmi-sent-ts': '1647540786418',
'user-id': '744324487',
'user-type': null,
'emotes-raw': null,
'badge-info-raw': 'subscriber/1',
'badges-raw': 'subscriber/0,sub-gifter/1',
'message-type': 'subgift'
}

//////////////////////subgift//////////////////////
pyperftysl
0
karnaaage
{ prime: false, plan: '1000', planName: 'Le Zodiac' }
{
'badge-info': { subscriber: '1' },
badges: { subscriber: '0' },
color: '#8A2BE2',
'display-name': 'pyperftysl',
emotes: null,
flags: null,
id: '1fda0b6b-9a3f-4da5-86cd-cf7d4e2ba312',
login: 'pyperftysl',
mod: false,
'msg-id': 'subgift',
'msg-param-gift-months': true,
'msg-param-months': true,
'msg-param-origin-id': '64 41 98 30 37 b7 6b da e3 25 bc 5e 4b 26 66 ef f3 7f 56 b5',
'msg-param-recipient-display-name': 'karnaaage',
'msg-param-recipient-id': '131446055',
'msg-param-recipient-user-name': 'karnaaage',
'msg-param-sender-count': false,
'msg-param-sub-plan-name': 'Le Zodiac',
'msg-param-sub-plan': '1000',
'room-id': '252428210',
subscriber: true,
'system-msg': 'pyperftysl gifted a Tier 1 sub to karnaaage!',
'tmi-sent-ts': '1647540589518',
'user-id': '744324487',
'user-type': null,
'emotes-raw': null,
'badge-info-raw': 'subscriber/1',
'badges-raw': 'subscriber/0',
'message-type': 'subgift'
}


//////////////////////subgift//////////////////////
Mr_k60130
0
MaryumTV
{ prime: false, plan: '1000', planName: 'Le Zodiac' }
{
'badge-info': { subscriber: '1' },
badges: { subscriber: '0', premium: '1' },
color: '#000000',
'display-name': 'Mr_k60130',
emotes: null,
flags: null,
id: '69e7372c-ab38-465c-878f-b154c0ad5e56',
login: 'mr_k60130',
mod: false,
'msg-id': 'subgift',
'msg-param-gift-months': true,
'msg-param-months': true,
'msg-param-origin-id': '59 40 20 ce 3f 5a c9 bc a8 93 8b 26 6e b1 78 bd 7f 0c 61 0c',
'msg-param-recipient-display-name': 'MaryumTV',
'msg-param-recipient-id': '51916389',
'msg-param-recipient-user-name': 'maryumtv',
'msg-param-sender-count': false,
'msg-param-sub-plan-name': 'Le Zodiac',
'msg-param-sub-plan': '1000',
'room-id': '252428210',
subscriber: true,
'system-msg': 'Mr_k60130 gifted a Tier 1 sub to MaryumTV!',
'tmi-sent-ts': '1647540272744',
'user-id': '88354038',
'user-type': null,
'emotes-raw': null,
'badge-info-raw': 'subscriber/1',
'badges-raw': 'subscriber/0,premium/1',
'message-type': 'subgift'
}


*/

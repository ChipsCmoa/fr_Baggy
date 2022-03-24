module.exports = {
	name: 'subscription',
	execute(client, channel, username, method, message, userstate) {
		console.log("//////////////////////SUBSCRIPTION//////////////////////");
		console.log(username);
		console.log(method);
		console.log(message);
		console.log(userstate);
		console.log("");
		if (method.prime) client.say(channel, `Merci @${username} pour ton Prime ! frzodBaggylove3`);
		if (method.plan === "1000") client.say(channel, `Merci @${username} pour ton abonement ! frzodBaggylove3`);
		if (method.plan === "2000") client.say(channel, `Merci @${username} pour ton abonement, un Tier 2 en plus ! frzodBaggylove3`);
		if (method.plan === "3000") client.say(channel, `Merci pour ton abonement @${username} ! C'est un Tier 3 mon gourmand ? Tu ne te refuses rien frzodBaggylove3`);
	}
};

/*
//////////////////////submysterygift//////////////////////
Mr_k60130
{ prime: true, plan: 'Prime', planName: 'Le Zodiac' }
null
{
  'badge-info': { subscriber: '0' },
  badges: { subscriber: '0', premium: '1' },
  color: null,
  'display-name': 'Mr_k60130',
  emotes: null,
  flags: null,
  id: '574955b6-ee4b-42c4-84ef-cdcb31ae681d',
  login: 'mr_k60130',
  mod: false,
  'msg-id': 'sub',
  'msg-param-cumulative-months': true,
  'msg-param-months': false,
  'msg-param-multimonth-duration': false,
  'msg-param-multimonth-tenure': false,
  'msg-param-should-share-streak': false,
  'msg-param-sub-plan-name': 'Le Zodiac',
  'msg-param-sub-plan': 'Prime',
  'msg-param-was-gifted': 'false',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': 'Mr_k60130 subscribed with Prime.',
  'tmi-sent-ts': '1647539918063',
  'user-id': '88354038',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/0',
  'badges-raw': 'subscriber/0,premium/1',
  'message-type': 'sub'
}
//////////////////////submysterygift//////////////////////
reaverworldd
{ prime: true, plan: 'Prime', planName: 'Le Zodiac' }
null
{
  'badge-info': { subscriber: '0' },
  badges: { subscriber: '0', premium: '1' },
  color: '#0000FF',
  'display-name': 'reaverworldd',
  emotes: null,
  flags: null,
  id: 'bf62ef75-4186-411a-9b3a-4297b5a676c3',
  login: 'reaverworldd',
  mod: false,
  'msg-id': 'sub',
  'msg-param-cumulative-months': true,
  'msg-param-months': false,
  'msg-param-multimonth-duration': false,
  'msg-param-multimonth-tenure': false,
  'msg-param-should-share-streak': false,
  'msg-param-sub-plan-name': 'Le Zodiac',
  'msg-param-sub-plan': 'Prime',
  'msg-param-was-gifted': 'false',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': 'reaverworldd subscribed with Prime.',
  'tmi-sent-ts': '1647539777384',
  'user-id': '66048305',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/0',
  'badges-raw': 'subscriber/0,premium/1',
  'message-type': 'sub'
}
//////////////////////submysterygift//////////////////////
queen_tms
{ prime: true, plan: 'Prime', planName: 'Le Zodiac' }
null
{
  'badge-info': { subscriber: '0' },
  badges: { subscriber: '0', premium: '1' },
  color: '#FF69B4',
  'display-name': 'queen_tms',
  emotes: null,
  flags: null,
  id: 'dcff4293-6dbc-4351-a866-d445f0ac82a9',
  login: 'queen_tms',
  mod: false,
  'msg-id': 'sub',
  'msg-param-cumulative-months': true,
  'msg-param-months': false,
  'msg-param-multimonth-duration': false,
  'msg-param-multimonth-tenure': false,
  'msg-param-should-share-streak': false,
  'msg-param-sub-plan-name': 'Le Zodiac',
  'msg-param-sub-plan': 'Prime',
  'msg-param-was-gifted': 'false',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': 'queen_tms subscribed with Prime.',
  'tmi-sent-ts': '1647539554338',
  'user-id': '622639232',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/0',
  'badges-raw': 'subscriber/0,premium/1',
  'message-type': 'sub'
}
//////////////////////submysterygift//////////////////////
pyperftysl
{ prime: false, plan: '1000', planName: 'Le Zodiac' }
null
{
  'badge-info': { subscriber: '1' },
  badges: { subscriber: '0' },
  color: '#8A2BE2',
  'display-name': 'pyperftysl',
  emotes: null,
  flags: null,
  id: '89cbd6b0-d533-424b-8964-1176e1eeb2b5',
  login: 'pyperftysl',
  mod: false,
  'msg-id': 'sub',
  'msg-param-cumulative-months': true,
  'msg-param-months': false,
  'msg-param-multimonth-duration': '3',
  'msg-param-multimonth-tenure': false,
  'msg-param-should-share-streak': false,
  'msg-param-sub-plan-name': 'Le Zodiac',
  'msg-param-sub-plan': '1000',
  'msg-param-was-gifted': 'false',
  'room-id': '252428210',
  subscriber: true,
  'system-msg': 'pyperftysl subscribed at Tier 1.',
  'tmi-sent-ts': '1647539099991',
  'user-id': '744324487',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/1',
  'badges-raw': 'subscriber/0',
  'message-type': 'sub'
}

*/

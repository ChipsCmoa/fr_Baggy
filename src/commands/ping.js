exports.run = (client, channel, params, txt, self) => {
  client.ping().then((data) => {
    client.say(channel, `@${params.username}, ping: ${data[0]*1000}ms`);
  }).catch(console.error);
}

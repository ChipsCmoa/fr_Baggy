//////////// LOGS
const fs = require('fs');
if (!fs.existsSync("logs/logs-chat.csv")) fs.appendFile('logs/logs-chat.csv', 'Timestamp,Channel,Username,Content\n', function (err) {
    if (err) throw err;
    console.log('Fichier logs-chat.csv créé !');
  });
if (!fs.existsSync("logs/logs-actions-moderation.csv")) fs.appendFile('logs/logs-actions-moderation.csv', 'Timestamp,Channel,Username,Content\n', function (err) {
  if (err) throw err;
  console.log('Fichier logs-actions-moderation.csv créé !');
});

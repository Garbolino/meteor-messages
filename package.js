Package.describe({
  name: 'garbolino:meteor-messages',
  summary: 'A pattern to display application messages to the user',
  version: '1.0.0',
  author: "Orlando Martinez <orlando@rollingmute.com>",
  git: ' https://github.com/garbolino/meteor-messages.git'
});

Package.on_use(function(api, where) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.add_files(['meteor-messages.js','messages.html', 'messages.js'], 'client');
  if (api.export) api.export('Messages');
});

Package.onTest(function(api) {
  api.use('garbolino:meteor-messages', 'client'); 
  api.use(['tinytest', 'test-helpers'], 'client');
  api.add_files('meteor-messages-tests.js', 'client');
});
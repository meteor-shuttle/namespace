Package.describe({
  name: 'shuttle:namespace',
  version: '0.0.0',
  summary: 'Variable `Shuttle`.',
  git: 'https://github.com/meteor-shuttle/namespace',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('mongo');
  api.use('ecmascript');
  
  api.addFiles('shuttle.js');
  api.export('Shuttle');
});
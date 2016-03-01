Package.describe({
  name: 'shuttler:namespace',
  version: '0.0.1',
  summary: 'Variable `Shuttler`.',
  git: 'https://github.com/meteor-shuttler/namespace',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('mongo');
  api.use('ecmascript');
  
  api.addFiles('shuttler.js');
  api.export('Shuttler');
});
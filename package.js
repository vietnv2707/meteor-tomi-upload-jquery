Package.describe({
  name: '11met:upload-jquery',
  summary: 'Client template for uploads using "jquery-file-upload" from blueimp',
  version: '1.0.5',
  git: 'https://github.com/vietnv2707/meteor-tomi-upload-jquery.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['reactive-var', 'templating'], 'client');

  api.addFiles([
    'lib/vendor/jquery.ui.widget.js',
    'lib/jquery.iframe-transport.js',
    'lib/jquery.fileupload.js',
    'lib/css/jquery.fileupload.css',
    'lib/css/jquery.fileupload-ui.css',
    'lib/img/loading.gif',
    'lib/img/progressbar.gif'
  ], ['client']);

  api.addFiles([
    'upload_semantic_ui.html',
    'upload_semantic_ui.js',
    'bootstrap/bootstrap.css',
    'bootstrap/bootstrap_buttons.html',
    'bootstrap/bootstrap_buttons.js',
    'bootstrap/bootstrap_queue_item.html',
    'bootstrap/bootstrap_queue_item.js',
    'bootstrap/upload_bootstrap.html',
    'bootstrap/upload_bootstrap.js',
    'uploader.js'], 'client');

  api.export('Uploader', 'client');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('tomi:upload-client');
//  api.addFiles('upload-client-tests.js');
//});

Template['upload_semantic_ui'].events({
  'click .cancelUpload': function (e) {
    Uploader.cancelUpload(e);
  }
});

Template['upload_semantic_ui'].rendered = function () {
  Uploader.render.call(this);
};


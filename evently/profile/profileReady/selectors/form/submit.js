function() {
  var form = $(this);
  var fdoc = new Object();
  fdoc.created_at = new Date();
  fdoc.note = $("#note").val();
  fdoc.env = $("#env").val();
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
    }
  });
  return false;
};

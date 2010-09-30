function() {
  var form = $(this);
  var fdoc = new Object();
  fdoc.created_at = new Date();
  fdoc.note = $("#note").val();
  fdoc.tags = $("#tags").val().split(" ");
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
    }
  });
  return false;
};

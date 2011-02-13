function() {
  var form = $(this);
  var fdoc = new Object();
  fdoc.created_at = new Date();
  note = $("#note").val();
  fdoc.note = note;
  fdoc.tags = note.match(/\#[a-z]+/g);
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
	  updateTags();
    }
  });
  return false;
};

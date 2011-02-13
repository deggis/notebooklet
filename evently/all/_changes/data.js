function(data) {
  var p;
  return {
    items : data.rows.map(function(r) {
      p = {};
      p.note_start = r.value && r.value.note.substring(0, 50);
      p.id = r.value._id;
      return p;
    })
  }
};
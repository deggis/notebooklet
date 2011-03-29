function(data) {
  var p;
  return {
    items : data.rows.map(function(hit) {
      var r = hit.doc;
      p = {};
      p.note_start = r.note; //r.value.note.substring(0, 50);
      p.id = r._id;
      return p;
    })
  }
};

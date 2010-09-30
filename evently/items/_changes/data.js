function(data) {
  // $.log(data)
  var p;
  return {
    items : data.rows.map(function(r) {
      p = {};
      p.note = r.value && r.value.note;
	  p.tags = r.tags
      return p;
    })
  }
};
function(data) {
  // $.log(data)
  var p;
  return {
    items : data.rows.map(function(r) {
      p = {};
	  p.note_start = r.value && r.value.note.substring(0, 50);
	  if(r.value.tags) {
	  	p.tags = r.value.tags.join(", ");
	  }
	  else {
	  	p.tags = '&nbsp;';
	  }
	  if(r.value.modified_at) {
	  	p.last_updated = r.value.modified_at;
	  }
	  else {
	  	p.last_updated = r.value.created_at;
	  }
	  p.id = r.value._id;
      return p;
    })
  }
};

/*
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
*/
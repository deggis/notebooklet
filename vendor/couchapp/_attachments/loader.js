
function couchapp_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

couchapp_load([
  "vendor/couchapp/sha1.js",
  "vendor/couchapp/json2.js",
  "vendor/couchapp/jquery.js",
  "vendor/couchapp/jquery.couch.js",
  "vendor/couchapp/jquery.couch.app.js",
  "vendor/couchapp/jquery.couch.app.util.js",
  "vendor/couchapp/jquery.mustache.js",
  "vendor/couchapp/jquery.evently.js",
  "vendor/couchapp/jquery-ui/js/jquery-ui-1.8.5.custom.min.js"
]);

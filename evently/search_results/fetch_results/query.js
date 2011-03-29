function () {
    var search_tags = getSearchTags();
    return {
	"view" : "tagsearch",
	"include_docs": "true",
	"descending" : "true",
	"keys": search_tags
    }
}
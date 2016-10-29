puSearch.load_options();

function getSelectedText(callback) {
	chrome.tabs.executeScript( {
		code: "window.getSelection().toString().trim();"
	}, callback);
}


document.addEventListener('DOMContentLoaded', function() {
  var searchResult = document.getElementById('search-result');
	searchResult.innerHTML = "Loading..."
	
	getSelectedText(function(selectedText) {
			if(selectedText == null) selectedText = "";
		
			var page_url = puSearch.options.page_template.replace("%s", selectedText);
		
		  var iframe = "<iframe src='%pu'></iframe>".replace("%pu", page_url);  
			searchResult.innerHTML = iframe;
	});
	
});

/*
chrome.contextMenus.create({id:"lookup",title:"Lookup %s",contexts:["selection"]});
chrome.contextMenus.onClicked.addListener(function(sel){
       console.log(sel.selectionText);
});
*/

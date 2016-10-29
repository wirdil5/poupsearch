puSearch.load_options();

document.body.addEventListener("mousedown", function() {
	var div = document.getElementById('doc-popup');
	
	if(div != null) {
		div.style.display = 'none';
	}
});


document.body.addEventListener("mouseup", function(evt) {
	
	if(!puSearch.trigger_key_pressed(evt)) return;
	
	var selection = window.getSelection();
	if(selection == null) return;
	var selectedText = selection.toString().trim();
	if(selectedText.length == 0) return;
		
	showPopup(selectedText);
});

function showPopup(selectedText) {
	var srcLink = puSearch.options.page_template.replace("%s", selectedText);
	
	if(document.getElementById('doc-popup') == null) {
			var popup  = "<div id='doc-popup' style='display: none; position:fixed; z-index: 100000; left: 5px; top: 5px; width: 600px; height: 450px; box-shadow: 0px -0px 20px #888888; background-color: white; border: 2px solid silver; border-radius: 4px; padding: 4px'>"
								 + "<iframe id='doc-popup-frame' src='' style='width: 100%; height: 100%; border: none'></iframe>"
								 + "</div>";
								 
			document.body.innerHTML += popup;
	}
	
	var iframe = document.getElementById('doc-popup-frame');
	iframe.setAttribute('src', srcLink);
	
	var div = document.getElementById('doc-popup');
	div.style.display = 'block';
};

chrome.contextMenus.create({	
    title: "Search in new tab: %s",
    contexts:["selection"],
		onclick: function(info, tab) {
			showDocPopup(info.selectionText);
		}
});

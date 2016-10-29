var puSearch = (function(my) {
	my.DEFAULT_OPTIONS = {
		page_template: 'http://www.thesaurus.com/browse/%s?s=t',
		trigger_key : 'ctrl',
	};
	
	my.options = null;
	
	my.load_options = function() {
		chrome.storage.sync.get(my.DEFAULT_OPTIONS, function(items) {
			my.options = items;
		});
	}
	
	my.trigger_key_pressed = function(evt) {
		switch(my.options.trigger_key) {
			case 'alt': return evt.altKey;
			case 'ctrl': return evt.ctrlKey;
			case 'shift': return evt.shiftKey;
			case 'none': return true;
			default: return false;
		}
		
	}
	
	return my;
}(puSearch || {}));
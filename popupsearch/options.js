// Saves options to chrome.storage.sync.
function save_options() {
  var page_template = document.getElementById('page-template').value;
	var trigger_key = document.getElementById('trigger-key').value;
	
  chrome.storage.sync.set({
    page_template: page_template,
		trigger_key: trigger_key,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// stored in chrome.storage.
function restore_options() {
	
  chrome.storage.sync.get(puSearch.DEFAULT_OPTIONS, function(items) {
    document.getElementById('page-template').value = items.page_template;
		document.getElementById('trigger-key').value = items.trigger_key;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
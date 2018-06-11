//chrome.runtime.onInstalled.addListener(function() {
//  chrome.storage.sync.set({color: '#333'}, function() {
//    chrome.tabs.create({"url": "http://google.com"});
//    console.log("The color is gre.");
//  });
//});

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);
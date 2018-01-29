(function () {
  var api = {}, jsNode = document.createElement('script');
    api.url = {
        "guide-test": "https://sample1.com/test.js",
        "guide-dev" : "https://dev1.com/dev.js"
    }
    jsNode.src = api.url['guide-test'];
    jsNode.onload = function() {
       this.remove();
    };
  (document.head || document.documentElement).appendChild(jsNode);

  if ( typeof chrome !== 'undefined' ) {
      chrome.tabs.executeScript(tabId, { code: jsNode, runAt: 'document_end' }, callback );
  } else if ( typeof require !== 'undefined' ) {
       browser.tabs.executeScript({code: jsNode, runAt: 'document_idle'}, callback );
  } else if ( typeof safari !== 'undefined' ) {
    safari.extension.dispatchMessage("scriptLoaded", { "key": callback });
  }
}());

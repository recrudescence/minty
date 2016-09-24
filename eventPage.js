/* minty v1.0
 * Calvin Wang
 */

console.log("[minty v1.0 event page loaded]");
//displays icon in address bar when script is active
function showPageAction( tabId, changeInfo, tab ) {
    if(tab.url == "https://mint.intuit.com/planning.event"){
        chrome.pageAction.show(tabId);
    }
};

chrome.tabs.onUpdated.addListener(showPageAction);
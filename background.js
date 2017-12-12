// /* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'usage.js'
    })
})


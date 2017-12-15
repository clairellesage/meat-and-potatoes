// /* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'popup.js'
    })
    // chrome.app.window.create('popup.html', {
    //   id: "calcWinID",
    //   innerBounds: {
    //     width: 244,
    //     height: 380,
    //     minWidth: 244,
    //     minHeight: 380
    //   }
    // });
})

// chrome.runtime.getBackgroundPage.addListener(function() {
//   chrome.app.window.create('popup.html', {
//     id: "calcWinID",
//     innerBounds: {
//       width: 244,
//       height: 380,
//       minWidth: 244,
//       minHeight: 380
//     }
//   });
// });

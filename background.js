function getSidepanelContexts() {
    return chrome.runtime.getContexts({ contextTypes: [chrome.runtime.ContextType.SIDE_PANEL] })
}

chrome.action.onClicked.addListener(async (tab) => {
    await chrome.sidePanel.open({ windowId: tab.windowId });
    // Returns empty array
    console.log("action.onClicked", await getSidepanelContexts());

    setTimeout(async () => {
        // Returns an array with one element
        console.log("action.onClicked timeout", await getSidepanelContexts());
    }, 1000);
});


chrome.sidePanel.onClosed?.addListener(async () => {
    // Returns empty array
    console.log("sidePanel.onClosed", await getSidepanelContexts());
});

chrome.sidePanel.onOpened?.addListener(async () => {
    // Returns empty array
    console.log("sidePanel.onOpened", await getSidepanelContexts());
    setTimeout(async () => {
        // Returns an array with one element
        console.log("sidePanel.onOpened timeout", await getSidepanelContexts());
    }, 1000);
});

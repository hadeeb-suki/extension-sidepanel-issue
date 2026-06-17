```js
chrome.runtime.getContexts({ contextTypes: [chrome.runtime.ContextType.SIDE_PANEL] })
```
returns an empty array when executed right after `chrome.sidePanel.open` or in `chrome.sidePanel.onOpened` event handler

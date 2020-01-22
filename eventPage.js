var contextMenuItem = {
  "id": "search",
  "title": " VistaSearch for '%s'",
  // ^context menu items sorted alphabetically
  // add whitespace to appear at top of the list
  "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(onClick){
  if (onClick.menuItemId == 'search' && onClick.selectionText){
    var url = "https://search.vista.co/#q=\"" + onClick.selectionText + "\"";
    var createProperties = {
      "url": url
    };
    chrome.tabs.create(createProperties);
  }
});

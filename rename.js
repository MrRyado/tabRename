function changeTitle() {
    var newTitle = document.getElementById('newTitle').value;
    if (newTitle !== '') {
        chrome.tabs.executeScript(
            {
                code: 'document.title="' + newTitle + '"'
            }
        );
    }
    window.close();
}

chrome.tabs.getSelected(null, function (tab) {
    document.getElementById('newTitle').value = tab.title;
    document.getElementById('newTitle').select();
    
});

document.getElementById('renameTab').addEventListener('click', changeTitle);
document.getElementById('newTitle').addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        changeTitle();
    }
});
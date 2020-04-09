function toggleDarkMode() {
    const DARK_CLASS = 'dark';
    const HIGHLIGHT_CLASS = 'highlight';
    const DARK_HIGHLIGHT_CLASS = 'dark-highlight';
    
    var body = document.querySelector("body");
    if (body.classList.contains(DARK_CLASS)) {
        body.classList.remove(DARK_CLASS);
        toggleHighlightsClass(DARK_HIGHLIGHT_CLASS, HIGHLIGHT_CLASS);
    } else {
        body.classList.add(DARK_CLASS);
        toggleHighlightsClass(HIGHLIGHT_CLASS, DARK_HIGHLIGHT_CLASS);
    }
}

function toggleHighlightsClass(classToRemove, newClass) {
    var items = document.querySelectorAll("." + classToRemove);
    items.forEach(function(item) {
        item.classList.remove(classToRemove);
        item.classList.add(newClass);
    });
}
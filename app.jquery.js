// app.js.min

// Minified jQuery library
// ... jQuery minified code ...

// Get value by id
const getValueById = (id) => $(`#${id}`).val();

// Get value by class
const getValueByClass = (className) => $(`.${className}`).val();

// Get value by name
const getValueByName = (name) => $(`input[name="${name}"]`).val();

// Set value by id
const setValueById = (id, value) => $(`#${id}`).val(value);

// Remove class attribute by id
const removeClassById = (id, atr) => $(`#${id}`).removeClass(atr);

// Remove class attribute by class name
const removeClassByClass = (className, atr) => $(`.${className}`).removeClass(atr);

// Add class attribute by id
const addClassById = (id, atr) => $(`#${id}`).addClass(atr);

// Add class attribute by class name
const addClassByClass = (className, atr) => $(`.${className}`).addClass(atr);

// Get text content by id
const getTextById = (id) => $(`#${id}`).text();

// Set text content by id
const setTextById = (id, text) => $(`#${id}`).text(text);

// Hide element by id
const hideById = (id) => $(`#${id}`).hide();

// Show element by id
const showById = (id) => $(`#${id}`).show();

// Toggle visibility by id
const toggleVisibilityById = (id) => $(`#${id}`).toggle();

// Disable element by id
const disableById = (id) => $(`#${id}`).prop('disabled', true);

// Enable element by id
const enableById = (id) => $(`#${id}`).prop('disabled', false);

// Add HTML content by id
const addHtmlById = (id, html) => $(`#${id}`).html(html);

// Append HTML content by id
const appendHtmlById = (id, html) => $(`#${id}`).append(html);

// Prepend HTML content by id
const prependHtmlById = (id, html) => $(`#${id}`).prepend(html);

// Find element by id
const findElementById = (id, element) => $(`#${id}`).find(element);

// Check if element with id exists
const elementExistsById = (id) => $(`#${id}`).length > 0;

// Check if element with class exists
const elementExistsByClass = (className) => $(`.${className}`).length > 0;

// Fade in element by id
const fadeInById = (id, duration) => $(`#${id}`).fadeIn(duration);

// Fade out element by id
const fadeOutById = (id, duration) => $(`#${id}`).fadeOut(duration);

// Slide down element by id
const slideDownById = (id, duration) => $(`#${id}`).slideDown(duration);

// Slide up element by id
const slideUpById = (id, duration) => $(`#${id}`).slideUp(duration);

// Get attribute value by id and attribute name
const getAttributeById = (id, attributeName) => $(`#${id}`).attr(attributeName);

// Set attribute value by id and attribute name
const setAttributeById = (id, attributeName, value) => $(`#${id}`).attr(attributeName, value);

// Remove attribute by id and attribute name
const removeAttributeById = (id, attributeName) => $(`#${id}`).removeAttr(attributeName);

// Empty the content of an element by id
const emptyById = (id) => $(`#${id}`).empty();

// Remove element by id
const removeById = (id) => $(`#${id}`).remove();

// Get the value of a selected option in a dropdown by id
const getSelectedOptionValueById = (id) => $(`#${id} option:selected`).val();

// Set the selected option in a dropdown by id
const setSelectedOptionById = (id, value) => $(`#${id}`).val(value);

// Check if a checkbox with a specific id is checked
const isCheckboxCheckedById = (id) => $(`#${id}`).is(':checked');

// Check if an element with a specific id has a specific class
const hasClassById = (id, className) => $(`#${id}`).hasClass(className);

// Get the height of an element by id
const getHeightById = (id) => $(`#${id}`).height();

// Get the width of an element by id
const getWidthById = (id) => $(`#${id}`).width();

// Set the height of an element by id
const setHeightById = (id, height) => $(`#${id}`).height(height);

// Set the width of an element by id
const setWidthById = (id, width) => $(`#${id}`).width(width);

// Scroll to the top of an element by id
const scrollToTopById = (id) => $(`#${id}`).animate({ scrollTop: 0 }, 'slow');

// Get the value of a radio button by name
const getRadioValueByName = (name) => $(`input[name="${name}"]:checked`).val();

// Check if an element with a specific id is visible
const isElementVisibleById = (id) => $(`#${id}`).is(':visible');

// Get the position of an element relative to the document
const getElementPositionById = (id) => {
    const element = $(`#${id}`);
    const offset = element.offset();
    return { top: offset.top, left: offset.left };
};

// Get the parent element of an element by id
const getParentById = (id) => $(`#${id}`).parent();

// Get all siblings of an element by id
const getSiblingsById = (id) => $(`#${id}`).siblings();

// Remove all children of an element by id
const removeAllChildrenById = (id) => $(`#${id}`).empty();

// Check if the document is ready for manipulation
const isDocumentReady = (callback) => $(document).ready(callback);

// Trigger a custom event on an element by id
const triggerCustomEventById = (id, eventName) => $(`#${id}`).trigger(eventName);

// Delay execution of a function by a specified time
const delayExecution = (callback, delayInMilliseconds) => setTimeout(callback, delayInMilliseconds);

// Focus on an element by id
const focusById = (id) => $(`#${id}`).focus();

// Blur an element by id
const blurById = (id) => $(`#${id}`).blur();

// Toggle a class on and off by id
const toggleClassById = (id, className) => $(`#${id}`).toggleClass(className);

// Get the HTML content of an element by id
const getHtmlById = (id) => $(`#${id}`).html();

// Get the value of a textarea by id
const getTextareaValueById = (id) => $(`#${id}`).val();

// Set the value of a textarea by id
const setTextareaValueById = (id, value) => $(`#${id}`).val(value);

// Append text to an element by id
const appendTextById = (id, text) => $(`#${id}`).append(document.createTextNode(text));

// Get the position of the mouse event relative to an element by id
const getMousePositionRelativeToElementById = (event, id) => {
    const element = $(`#${id}`);
    const offset = element.offset();
    return {
        x: event.pageX - offset.left,
        y: event.pageY - offset.top
    };
};

// Wrap an element by id with another element
const wrapElementById = (id, wrapper) => $(`#${id}`).wrap(wrapper);

// Unwrap an element by id, removing its parent
const unwrapElementById = (id) => $(`#${id}`).unwrap();

// Check if an element by id has a specific attribute
const hasAttributeById = (id, attributeName) => $(`#${id}`).attr(attributeName) !== undefined;

// Get the value of a data attribute by id
const getDataAttributeById = (id, dataAttributeName) => $(`#${id}`).data(dataAttributeName);

// Set the value of a data attribute by id
const setDataAttributeById = (id, dataAttributeName, value) => $(`#${id}`).data(dataAttributeName, value);

// Serialize form data by id into an object
const serializeFormById = (id) => $(`#${id}`).serializeArray().reduce((obj, item) => {
    obj[item.name] = item.value;
    return obj;
}, {});

// Scroll an element by id to a specific position
const scrollToPositionById = (id, position) => $(`#${id}`).scrollTop(position);

// Get the selected text in a text input or textarea by id
const getSelectedTextById = (id) => {
    const element = $(`#${id}`)[0];
    if (element.selectionStart !== undefined && element.selectionEnd !== undefined) {
        return element.value.substring(element.selectionStart, element.selectionEnd);
    } else {
        return "";
    }
};

// Get the total height of an element, including padding and border, by id
const getOuterHeightById = (id, includeMargin = false) => $(`#${id}`).outerHeight(includeMargin);

// Get the total width of an element, including padding and border, by id
const getOuterWidthById = (id, includeMargin = false) => $(`#${id}`).outerWidth(includeMargin);

// Get the position of the scroll bar in an element by id
const getScrollPositionById = (id) => {
    const element = $(`#${id}`);
    return {
        scrollTop: element.scrollTop(),
        scrollLeft: element.scrollLeft()
    };
};

// Check if an element with a specific id is empty
const isEmptyById = (id) => $(`#${id}`).is(':empty');

// Remove specific child element by id
const removeChildById = (id, childId) => $(`#${id} #${childId}`).remove();

// Check if an element with a specific id has a specific attribute with a specific value
const hasAttributeValueById = (id, attributeName, attributeValue) => $(`#${id}[${attributeName}="${attributeValue}"]`).length > 0;

// Replace specific text content in an element by id
const replaceTextById = (id, search, replacement) => {
    const element = $(`#${id}`);
    element.text(element.text().replace(search, replacement));
};

// Set or get the inner HTML content of an element by id
const innerHtmlById = (id, content) => {
    const element = $(`#${id}`);
    if (content !== undefined) {
        element.html(content);
    }
    return element.html();
};

// Check if an element with a specific id is within the viewport
const isInViewportById = (id) => {
    const element = $(`#${id}`);
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    const elementTop = element.offset().top;
    const elementBottom = elementTop + element.height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

// Get the width of the browser window
const getWindowWidth = () => $(window).width();

// Get the height of the browser window
const getWindowHeight = () => $(window).height();

// Get the scroll position of the browser window
const getWindowScrollPosition = () => ({
    top: $(window).scrollTop(),
    left: $(window).scrollLeft()
});

// Set the scroll position of the browser window
const setWindowScrollPosition = (top, left) => {
    $(window).scrollTop(top);
    $(window).scrollLeft(left);
};

// Get the outer height of an element including margin by id
const getOuterHeightWithMarginById = (id) => $(`#${id}`).outerHeight(true);

// Get the outer width of an element including margin by id
const getOuterWidthWithMarginById = (id) => $(`#${id}`).outerWidth(true);

// Check if an element with a specific id is currently being animated
const isBeingAnimatedById = (id) => $(`#${id}`).is(':animated');

// Stop the animation of an element by id
const stopAnimationById = (id) => $(`#${id}`).stop();

// Set the CSS styles for an element by id
const setStylesById = (id, styles) => $(`#${id}`).css(styles);

// Reload the current page
const reloadPage = () => location.reload();

// Navigate to a new URL
const navigateTo = (url) => {
    window.location.href = url;
};

// Open a new browser window
const openWindow = (url, name, features) => {
    window.open(url, name, features);
};

// Close the current browser window
const closeWindow = () => {
    window.close();
};

const setPointerEventbyId =(id, type) =>{
    $(`#${id}`).css('pointer-events', type);
}

/**
 * Export all functions
 * You can change 'app' to your keyword
 */
window.app = {
    getValueById,
    getValueByClass,
    getValueByName,
    setValueById,
    removeClassById,
    removeClassByClass,
    addClassById,
    addClassByClass,
    getAttributeById,
    setAttributeById,
    removeAttributeById,
    emptyById,
    setSelectedOptionById,
    isCheckboxCheckedById,
    getTextById,
    setTextById, 
    hasClassById,
    removeChildById,
    hasAttributeValueById,
    hasAttributeById,
    getDataAttributeById,
    setDataAttributeById,
    reloadPage,
    replaceTextById,
    addHtmlById,
    appendHtmlById,
    findElementById,
    setPointerEventbyId,

//---------------------------------------------
    hideById,
    showById,
    toggleVisibilityById,
    disableById,
    enableById,
    prependHtmlById,
    elementExistsByClass,
    elementExistsById,
    fadeInById,
    fadeOutById,
    slideUpById,
    slideDownById,
    removeById,
    getSelectedOptionValueById,
    getHeightById,
    getWidthById,
    setHeightById,
    setWidthById,
    scrollToTopById,
    getRadioValueByName,
    isElementVisibleById,
    getElementPositionById,
    getParentById,
    getSiblingsById,
    isDocumentReady,
    removeAllChildrenById,
    triggerCustomEventById,
    delayExecution,
    focusById,
    blurById,
    toggleClassById,
    getHtmlById,
    getTextareaValueById,
    setTextareaValueById,
    appendTextById,
    getMousePositionRelativeToElementById,
    wrapElementById,
    unwrapElementById,
    serializeFormById,
    scrollToPositionById,
    getSelectedTextById,
    getOuterHeightById,
    getOuterWidthById,
    getScrollPositionById,
    isEmptyById,
    innerHtmlById,
    isInViewportById,
    getWindowHeight,
    getWindowScrollPosition,
    setWindowScrollPosition,
    getOuterHeightWithMarginById,
    getOuterWidthWithMarginById,
    isBeingAnimatedById,
    stopAnimationById,
    setStylesById,
    navigateTo,
    openWindow,
    closeWindow
};

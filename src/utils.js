function querySelector(query) {
    return document.querySelector(query);
}

function createElement(type){
    return document.createElement(type);
}

function appendNode(ele, context) {
    (context || document.body).appendChild(ele);
}

function querySelectorAll(query, context) {
    return Array.prototype.slice.call((
        context || document
    ).querySelectorAll(query))
}


/*styles class*/
function hasClass(el, className) {
    return el.classList.contains(className);
}

function addClass(el, className) {
    if(Array.isArray(className)) {
        className.forEach(_class => el.classList.add(_class))
    } else {
        el.classList.add(className);
    }
}

function removeClass(el, className) {
    if(Array.isArray(className)) {
        className.forEach(_class => el.classList.remove(_class))
    } else {
        el.classList.remove((className));
    }
}

function toggleClass(el, className) {
    const _hasClass = hasClass(el, className);
    if(_hasClass) {
        removeClass(el, className);
    } else {
        addClass(el, className);
    }
}


export {
    querySelector,
    querySelectorAll,
    createElement,
    appendNode,
    addClass,
    hasClass,
    removeClass,
    toggleClass,
}

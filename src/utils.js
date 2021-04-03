function getElementById(id) {
    return document.getElementById(id);
}

function newNode(type){
    return document.createElement(type);
}

export {
    getElementById,
    newNode,
}

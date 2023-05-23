const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    console.log(cats.shift(name));
}
function appendCat(name) {
    const append = [...cats, name];
    return append;
}
function prependCat(name) {
    const prepend = [name, ...cats];
    return prepend;
}
function removeLastCat(name) {
    const removeL = cats.slice(0, cats.length-1);
    return removeL;
}
function removeFirstCat(name) {
    const removeF = cats.slice(1);
    return removeF;
}
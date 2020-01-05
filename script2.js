window.onload = function () {
    initShoppingList();
};

function initShoppingList() {

    let form;
    form.addEventListener("submit", deleteItem, (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();
    document.getElementById("shopping-list");

    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomInt(0, 10000000);

    // Creates list item html and appends to page.
    createListItemHtml(itemName.value, itemAmount.value, id);
    document.getElementById("shopping-list");
    setDeleteButtonEvent(id);
}

let deleteButton;
deleteButton.addEventListener = function (listItem, deleteItem) {
    let deleteButton = deleteItem;
};

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button" + id);
    deleteButton.addEventListener = click => {
        removeListItem(id);
    }

}

function createListItemHtml(itemName, itemAmount, id) {
    return `<li id="item${id}">
${itemName} - ${itemAmount}
<button id="button${id}" type="button">Delete Item</button>
</li>`
}

function removeListItem(id) {
    let listItem = document.getElementById("item" + id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;


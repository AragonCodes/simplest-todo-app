// Bind HTML elements to JS variables
const inputEl = document.getElementById('input-box');
const listEl = document.getElementById('list');
const addButton = document.getElementById('add-button');

// Bind functions to click events on buttons
addButton.addEventListener('click', addItem);
listEl.addEventListener('click', deleteItem);

function addItem() {
  // Store the current value of the input box and clear it
  const currentInputValue = inputEl.value;
  inputEl.value = '';

  // Create div container
  const itemContainer = document.createElement('p');

  // Create text and append to div container
  const newTodo = document.createElement('span');
  newTodo.innerText = currentInputValue;
  itemContainer.appendChild(newTodo);

  // Create complete button and append to div container
  const trashButton = document.createElement('button');
  trashButton.innerText = '✓';
  trashButton.classList.add('remove-btn');
  itemContainer.appendChild(trashButton);

  // Attach div container to list
  listEl.appendChild(itemContainer);
}

function deleteItem(event) {
  const clickedElement = event.target; // e.target is the clicked button

  // check that the clicked element is a button with class 'remove-btn'
  if (clickedElement.classList[0] === 'remove-btn') {
    clickedElement.parentElement.remove(); // remove item (the parent div) from the DOM
  }
}

const addItems = document.querySelector('.add-items'); 
const itemsList = document.querySelector('.plates'); 
const items = JSON.parse(localStorage.getItem('items')) || []; // load items from local storage

function addItem(e) {
    e.preventDefault(); // prevent form from submitting
    const text = (this.querySelector('[name=item]')).value; // get the text
    const item = {
      text,
      done: false
    };

    items.push(item); // add to the end of the array
    populateList(items, itemsList); // re-populate the list
    localStorage.setItem('items', JSON.stringify(items)); // save to local storage
    this.reset(); // reset the form
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
      `;
  }).join(''); // join the array into a string
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target; // get the element
  const index = el.dataset.index; // get the index
  items[index].done = !items[index].done; // toggle the done value
  localStorage.setItem('items', JSON.stringify(items)); // save to local storage
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem); // add the event listener to the form
itemsList.addEventListener('click', toggleDone); // add the event listener to the list

populateList(items, itemsList); // populate the list with the items
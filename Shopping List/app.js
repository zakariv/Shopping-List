const form = document.querySelector('form');
const ul = document.querySelector('ul');
const clearButton = document.querySelector('.clearAll');
const filter = document.querySelector('.filterItems');
const items = document.querySelectorAll('.item');
const icons = document.querySelector('.icons');
const editIcon = icons.firstElementChild;
const deleteIcon = icons.lastElementChild;

// console.log(items);
function checkUI() {
  const items = ul.querySelectorAll('li');
  if (items.length === 0) {
    clearButton.classList.add('none');
    filter.classList.add('none');
  } else {
    clearButton.classList.remove('none');
    filter.classList.remove('none');
  }
}

const addItems = (e) => {
  const input = document.querySelector('.text');

  const parentDiv = document.createElement('div');
  parentDiv.className = 'item';

  const li = document.createElement('li');
  li.textContent = input.value;

  const div = document.createElement('div');
  div.className = 'icons';

  const rm = document.createElement('i');
  rm.className = 'fa-solid fa-pen-to-square';
  rm.style.color = '#01b41f';

  const edit = document.createElement('i');
  edit.className = 'fa-solid fa-x';
  edit.style.color = '#f81302';

  div.appendChild(rm);
  div.appendChild(edit);

  parentDiv.appendChild(li);
  parentDiv.appendChild(div);

  if (input.value === '' || input.value === ' ') {
    alert(`can't submit an empty field`);
  } else {
    ul.appendChild(parentDiv);
  }

  input.value = '';

  checkUI();

  e.preventDefault();
};

const deleteItem = (e) => {
  if (e.target.classList.contains('fa-x')) {
    e.target.parentElement.parentElement.remove();
  }

  checkUI();
};

const clearAll = () => {
  while (ul.firstElementChild) {
    ul.removeChild(ul.firstElementChild);
  }
  checkUI();
};

items.forEach((item) => {
  item.lastElementChild.firstElementChild.addEventListener('click', (e) => {
    const input = document.querySelector('.text');
    const addButton = document.querySelector('.addButton');
    if (e.target.classList.contains('fa-pen-to-square')) {
      input.value = item.innerText;
      input.style.border = '1px solid #01b41f';
      addButton.style.backgroundColor = '#01b41f';
      addButton.style.border = '1px solid #01b41f ';
      addButton.innerText = 'Edit Item';
    } else {
      input.value = '';
    }
  });
});

form.addEventListener('submit', addItems);
ul.addEventListener('click', deleteItem);
clearButton.addEventListener('click', clearAll);
// item.addEventListener('click', editItem);

checkUI();

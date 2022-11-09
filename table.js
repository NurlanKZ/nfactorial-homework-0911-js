// 1. Таблицу с `id="age-table"`.
const ageTable = document.getElementById('age-table');
console.log("1:",ageTable);

// 2. Все элементы `label` внутри этой таблицы (их три).
const allLabel = ageTable.getElementsByTagName('label');
console.log("2:",allLabel);

// 3. Первый `td` в этой таблице (со словом «Age»).
const firstTD = ageTable.getElementsByTagName('td')[0]; // we used [0] to get the first element
console.log("3:",firstTD);

// 4. Форму `form` с именем `name="search"`.
const formTag = document.getElementsByTagName('form');
const searchForm = formTag.search;
console.log("4:",searchForm);

// 5. Первый `input` в этой форме.
const formInputs = searchForm.getElementsByTagName('input');
console.log(formInputs);
// to get the first element
const firstInput = formInputs[0];
console.log("5:",firstInput);

// 6. Последний `input` в этой форме.
// to get the last element
const lastInput = formInputs[formInputs.length-1];
console.log("6:",lastInput);

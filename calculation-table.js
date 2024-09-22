let start = 1;
let limit = 10;

for (i = start; i < limit;)
	console.log(i++);

let xTable = [];
for (i = 1; i <= limit; i++) {
	let tab = [];
	for (j = 1; j <= limit; j++) {
		tab.push(j*i);
	}
	xTable.push(tab);
}
console.table(xTable);

let jsTable = document.querySelector('#js-table');

function createCell (type, tr, content) {
	let cell = document.createElement(type);
	cell.innerHTML = content;
	tr.appendChild(cell);
	return cell;
}

function insertHead(htmlElement) {
	let tr = document.createElement('tr');
	createCell('th', tr, "").setAttribute("scope", "col");
	for (let i = 1; i <= limit; i++) {
		createCell('th', tr, i).setAttribute("scope", "col");
	}
	htmlElement.appendChild(tr);
}

function insertLine(i, operation, tr, start, limit) {
	for (let j = start; j <= limit; j++) {
		createCell('td', tr, operation(i, j) );
	}
}

function insertBody(operation, htmlElement, start, limit) {
	for (let i = start; i <= limit; i++) {
		let tr = document.createElement('tr');
		createCell('th', tr, i).setAttribute("scope", "row");;
		insertLine(i, operation, tr, start, limit);
		htmlElement.appendChild(tr);
	}
}

function operation(a,b) {
	return Math.round(a * b);
}

insertHead(jsTable);
insertBody(operation, jsTable, start, limit);
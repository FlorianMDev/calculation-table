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
jsTable.innerHTML = `<thead></thead><tbody></tbody>`;
let thead = document.querySelector('#js-table thead');
let tbody = document.querySelector('#js-table tbody');

function insertHead(html) {
	html.innerHTML = '';
	let th = `<tr><th scope="col">Nbr</th>`;
	for (let i = 1; i <= limit; i++) {
		th += `<th scope="col">${i}</th>`;
	}
	html.innerHTML += th;
	html.innerHTML += '</tr>';
}


function insertLine(i, operation, th, html, start, limit) {
	for (let j = start; j <= limit; j++) {		
		th += `<td>${operation(i, j)}</td>`;
	}
	html.innerHTML += th;
}
function insertBody(operation, html, start, limit) {
	html.innerHTML = '';
	for (let i = start; i <= limit; i++) {
		let th = `<tr><th scope ="row">${i}</th>`;
		insertLine(i, operation, th, html, start, limit);
		html.innerHTML += '</tr>';
	}
}

insertHead(thead);
insertBody((a,b) => Math.round(/*change operation here :*/ (a**2) * (b**2) ), tbody, start, limit);
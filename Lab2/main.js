window.onload = () => {
	checkLCNull();
	//upload();
	get();
	setOnClick();
	renderPassagers();
	renderTickets();
	renderTrains();
	renderSoldTickets();
}

function setOnClick(){
	const button_create_pass = document.querySelector('#create_passenger');
	button_create_pass.addEventListener('click', addPassenger);

	const button_edit_pass = document.querySelector('#edit_passenger');
	button_edit_pass.addEventListener('click', editPassenger);

	const button_create_ticket = document.querySelector('#create_ticket');
	button_create_ticket.addEventListener('click', addTicket);

	const button_edit_ticket = document.querySelector('#edit_ticket');
	button_edit_ticket.addEventListener('click', editTicket);

	const button_create_train = document.querySelector('#create_train');
	button_create_train.addEventListener('click', addTrain);

	const button_edit_train = document.querySelector('#edit_train');
	button_edit_train.addEventListener('click', editTrain);

	const button_create_sticket = document.querySelector('#create_sticket');
	button_create_sticket.addEventListener('click', addSoldTicket);

	const button_edit_sticket = document.querySelector('#edit_sticket');
	button_edit_sticket.addEventListener('click', editSoldTicket);
}

function renderPassagers(){
	renderTable("#show_table_passenger",['id','name','passport'],Passengers);
}
function renderTickets(){
	renderTable("#show_table_ticket",['id','number','price'],Tickets);
}
function renderTrains(){
	renderTable("#show_table_train",['id','name','road','number'],Trains);
}
function renderSoldTickets(){
	renderTable("#show_table_sticket",['id','id passenger','id train','id ticket', 'date'],SoldTickets);
}

function renderTable(id,h_des,array){
	upload();
	let element = document.querySelector(id);
	element.innerHTML = '';
	if(array.length === 0){
		const p = document.createElement('p');
		p.innerHTML = 'No elements';
		element.append(p);
		return;
	}
	const table = document.createElement('table');
	const thead = document.createElement('thead');
	table.append(thead);
	const tr = document.createElement('tr');
	thead.append(tr);
	for(let i=0; i<h_des.length; i++) {
		const th = document.createElement('th');
		th.innerHTML = h_des[i];
		tr.append(th);
	}
	const tbody = document.createElement('tbody');
	table.append(tbody);
	element.append(table);
	for (let element of array) {
		let id = element.ID;
		const tr = document.createElement('tr');
		tbody.append(tr);
		for(let key in element) {
			const td = document.createElement('td');
			td.innerHTML = element[key];
			tr.append(td);
		}
	}
}

function checkLCNull(){
	if(localStorage.getItem('p') == undefined){
		localStorage.setItem('pid', Passenger.last_id);
		localStorage.setItem('p', JSON.stringify(Passengers));
	}
	if(localStorage.getItem('t') == undefined){
		localStorage.setItem('tid', Ticket.last_id);
		localStorage.setItem('t', JSON.stringify(Tickets));
	}
	if(localStorage.getItem('tr') == undefined){
		localStorage.setItem('trid', Train.last_id);
		localStorage.setItem('tr', JSON.stringify(Trains));
	}
	if(localStorage.getItem('st') == undefined){
		localStorage.setItem('stid', SoldTicket.last_id);
		localStorage.setItem('st', JSON.stringify(SoldTickets));
	}
}

function upload(){
	localStorage.setItem('pid', Passenger.last_id);
	localStorage.setItem('p', JSON.stringify(Passengers));
	localStorage.setItem('tid', Ticket.last_id);
	localStorage.setItem('t', JSON.stringify(Tickets));
	localStorage.setItem('trid', Train.last_id);
	localStorage.setItem('tr', JSON.stringify(Trains));
	localStorage.setItem('stid', SoldTicket.last_id);
	localStorage.setItem('st', JSON.stringify(SoldTickets));
}
function get(){
	Passenger.last_id = localStorage.getItem('pid');
	Passengers = JSON.parse(localStorage.getItem('p'));
	Ticket.last_id = localStorage.getItem('tid');
	Tickets = JSON.parse(localStorage.getItem('t'));
	Train.last_id = localStorage.getItem('trid');
	Trains = JSON.parse(localStorage.getItem('tr'));
	SoldTicket.last_id = localStorage.getItem('stid');
	SoldTickets = JSON.parse(localStorage.getItem('st'));
}



class Passenger{
	static last_id = 0;
	constructor(name,passport){
		this.id = Passenger.last_id++;
		this.name = name;
		this.passport = passport;
	}
}
var Passengers = new Array(0);

function addPassenger(){
	let name = document.querySelector('#pname').value;
	document.querySelector('#pname').value = '';
	let passport = document.querySelector('#ppass').value;
	document.querySelector('#ppass').value = '';
	if(name.length >0 && passport.length>0){
		Passengers.push(new Passenger(name,passport));
		renderPassagers();
	} else {
		alert('Empty string!');
	}
}
function editPassenger(){
	let id = document.querySelector('#peid').value;
	document.querySelector('#peid').value = '';
	let new_name = document.querySelector('#pename').value;
	document.querySelector('#pename').value = '';
	let new_passport = document.querySelector('#pepass').value;
	document.querySelector('#pepass').value = '';
	let t = findPassenger(id);
	if(t==undefined){
		alert('Passenger not found!')
		return;
	}
	if(new_name.length>0 && new_passport.length>0){
		t.name = new_name;
		t.passport = new_passport;
		renderPassagers();
		return;
	}
	if(new_name.length==0 && new_passport.length==0){
		deletePassenger(id);
		return;
	}
	alert('Empty String!');
}
function deletePassenger(id){
	Passengers = Passengers.filter(p => p.id != id);
	renderPassagers();
}
function findPassenger(id){
	return Passengers.find(p => p.id == id);
}



class Ticket{
	static last_id = 0;
	constructor(number,price){
		this.id = Ticket.last_id++;
		this.number = number;
		this.price = price;
	}
}
var Tickets = new Array(0);

function addTicket(){
	let number = document.querySelector('#tnumber').value;
	document.querySelector('#tnumber').value = '';
	let price = document.querySelector('#tprice').value;
	document.querySelector('#tprice').value = '';
	if(number.length >0 && price.length>0){
		Tickets.push(new Ticket(number,price));
		renderTickets();
	} else {
		alert('Empty string!');
	}
}
function editTicket(){
	let id = document.querySelector('#teid').value;
	document.querySelector('#teid').value = '';
	let new_number = document.querySelector('#tenumber').value;
	document.querySelector('#tenumber').value = '';
	let new_price = document.querySelector('#teprice').value;
	document.querySelector('#teprice').value = '';
	let t = findTicket(id);
	if(t==undefined){
		alert('Ticket not found!')
		return;
	}
	if(new_number.length==0 && new_price.length==0){
		deleteTicket(id);
		return;
	}
	if(new_number.length>0 && new_price.length>0){
		t.number = new_number;
		t.price = new_price;
		renderTickets();
		return;
	}

	alert('Empty String!');
}
function deleteTicket(id){
	Tickets = Tickets.filter(p => p.id != id);
	renderTickets();
}
function findTicket(id){
	return Tickets.find(p => p.id == id);
}



class Train{
	static last_id = 0;
	constructor(name,road,number){
		this.id = Train.last_id++;
		this.name = name;
		this.road = road;
		this.number=number;
	}
}
var Trains = new Array(0);

function addTrain(){
	let name = document.querySelector('#trname').value;
	document.querySelector('#trname').value = '';
	let number = document.querySelector('#trnumber').value;
	document.querySelector('#trnumber').value = '';
	let road = document.querySelector('#trroad').value;
	document.querySelector('#trroad').value = '';
	if(name.length >0 && number.length>0 && road.length>0){
		Trains.push(new Train(name,road,number));
		renderTrains();
	} else {
		alert('Empty string!');
	}
}
function editTrain(){
	let id = document.querySelector('#treid').value;
	document.querySelector('#treid').value = '';
	let new_name = document.querySelector('#trename').value;
	document.querySelector('#trename').value = '';
	let new_number = document.querySelector('#trenumber').value;
	document.querySelector('#trenumber').value = '';
	let new_road = document.querySelector('#treroad').value;
	document.querySelector('#treroad').value = '';
	let t = findTrain(id);
	if(t==undefined){
		alert('Train not found!')
		return;
	}
	if(new_number.length==0 && new_road.length==0 && new_name.length==0){
		deleteTrain(id);
		return;
	}
	if(new_number.length>0 && new_road.length>0 && new_name.length>0){
		t.number = new_number;
		t.road = new_road;
		t.name = new_name;
		renderTrains();
		return;
	}

	alert('Empty String!');
}
function deleteTrain(id){
	Trains = Trains.filter(p => p.id != id);
	renderTrains();
}
function findTrain(id){
	return Trains.find(p => p.id == id);
}


class SoldTicket{
	static last_id = 0;
	constructor(passenger,train,ticket,date){
		this.id = SoldTicket.last_id++;
		this.passenger = passenger;
		this.train = train;
		this.ticket = ticket;
		this.date = date;
	}
}
var SoldTickets = new Array(0);

function addSoldTicket(){
	let pass = document.querySelector('#stpass').value;
	document.querySelector('#stpass').value = '';
	let train = document.querySelector('#sttrain').value;
	document.querySelector('#sttrain').value = '';
	let ticket = document.querySelector('#stticket').value;
	document.querySelector('#stticket').value = '';
	let date = document.querySelector('#stdate').value;
	document.querySelector('#stdate').value = '';
	if(pass.length >0 && train.length>0 && ticket.length>0 && date.length>0){
		if(findPassenger(pass)!=undefined
			&& findTrain(train)!=undefined
			&& findTicket(ticket)!=undefined){
			SoldTickets.push(new SoldTicket(pass,train,ticket,date));
			renderSoldTickets();
		}else{
			alert('Wrong ID!');
		}
	} else {
		alert('Empty string!');
	}
}
function editSoldTicket(){
	let id = document.querySelector('#steid').value;
	document.querySelector('#steid').value = '';
	let new_pass = document.querySelector('#stepass').value;
	document.querySelector('#stepass').value = '';
	let new_train = document.querySelector('#stetrain').value;
	document.querySelector('#stetrain').value = '';
	let new_ticket = document.querySelector('#steticket').value;
	document.querySelector('#steticket').value = '';
	let new_date = document.querySelector('#stedate').value;
	document.querySelector('#stedate').value = '';
	console.log(new_pass);
	console.log(new_train);
	console.log(new_ticket);
	console.log(new_date);
	let t = findSoldTicket(id);
	if(t==undefined){
		alert('Sold Ticket not found!')
		return;
	}
	if(new_pass.length>0 && new_train.length>0 && new_ticket.length>0 && new_date.length>0){
		if(findPassenger(new_pass)!=undefined
			&& findTrain(new_train)!=undefined
			&& findTicket(new_ticket)!=undefined){

			t.passenger = new_pass;
			t.train = new_train;
			t.ticket = new_ticket;
			t.date = new_date;
			renderSoldTickets();
			return;
		}else{
			alert('Wrong ID!');
		}
	}
	if(new_pass.length==0 && new_train.length==0 && new_ticket.length==0 && new_date.length==0){
		deleteSoldTicket(id);
		return;
	}
	alert('Empty String!');
}
function deleteSoldTicket(id){
	SoldTickets = SoldTickets.filter(p => p.id != id);
	renderSoldTickets();
}
function findSoldTicket(id){
	return SoldTickets.find(p => p.id == id);
}

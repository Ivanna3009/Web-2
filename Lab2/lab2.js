class Passenger {

    constructor(name, passport_number) {
        this.tickets = []
        this.name = name;
        this.passport_number=passport_number;

    }
}

class Ticket {
    constructor(name, price) {
        this.name = name
        this.price = price
        //this.passenger = passenger.name;


    }
}

class Train{//потяг
	constructor(name, route, number){
    this.tickets = []
		this.name = name;
		this.route = route;
		this.number = number;
		//this.passengers = []

	}
}


var passengers = []
var tickets = []
var trains = []

//a
function addPassenger(name, passport_number){
    passengers.push(new Passenger(name, passport_number))
}
//b
function editPassenger(passengers, index, newName ){
		passengers[index].name = newName

}
//c
function removePassenger(passengers, index){
    passengers.splice(index,1);
}
//d
function searchPassenger(passengers, name){
    for (var i = 0; i < passengers.length; i++){
        if (passengers[i].name === name){
            return passengers[i]
        }
    }
}
//e
function addTrain(name, route, number){
    trains.push(new Train(name, route, number)
    )
}
//f
function editTrain(trains, index, newName ){
		trains[index].name = newName
}
//g
function removeTrain(trains, index){
    trains.splice(index,1);
}
//h
function searchTrain(trains, name){
    for (var i = 0; i < trains.length; i++){
        if (trains[i].name === name){
            return trains[i]
        }
    }
}

//i
function addTicketToPassenger(passenger,number , price){

    passenger.tickets.push(new Ticket(number, price));
}
//k
function cancellationOfTicketPurchase(passenger, index){
    passenger.tickets.splice(index,1);
}


function addTicketToTrain(train,ticket_n, price){

    train.tickets.push(new Ticket(ticket_n, price));
}
//j
function changeTicket(train, new_train, ticket_n){

    train.tickets.splice(0,1);
    new_train.tickets.push(new Ticket(ticket_n));
}
//l
function most_popular_rote(){
  let soldTicketsLength = [];
  trains.forEach(elem => soldTicketsLength.push(elem.tickets.length));
  let max = Math.max(...soldTicketsLength);
  var a = trains.find(elem => elem.tickets.length ===max);
  return a.route
}

//o
function unpopular_rote(){
  let soldTicketsLength = [];
  trains.forEach(elem => soldTicketsLength.push(elem.tickets.length));
  let min = Math.min(...soldTicketsLength);
  return (trains.find(elem => elem.tickets.length===min)).route;
}

function expencive(){
  let price_mas = [];
  trains.forEach(elem => price_mas.push(elem.tickets.price));
  return Math.max(price_mas.reduce((a, b) => a + b, 0))
  //let max = Math.max(...soldTicketsLength);
  //var a = trains.find(elem => elem.tickets.length ===max);
  //return a.route
}



addPassenger('Yana',111);
addPassenger('Ivanna',222);
addPassenger('Kate',333);
addPassenger('Maks',444);
addPassenger('Nasar',555);
addPassenger('Vita',666);
addPassenger('Misha',777);


addTrain('train1','route1', 1);
addTrain('train2','route2', 2);
addTrain('train3','route3', 3);
addTrain('train4','route4', 4);
addTrain('train5','route5', 5);
addTrain('train6','route6', 6);
addTrain('train7','route7', 7);

addTicketToPassenger(passengers[0], 'ticket_7', 180);
addTicketToPassenger(passengers[0], 'ticket_6', 200);
addTicketToPassenger(passengers[1], 'ticket_5', 300);
console.log(passengers)

cancellationOfTicketPurchase(passengers[0], 1);
console.log(searchPassenger(passengers, 'Yana'))
//console.log(tickets)
//console.log(searchPassenger(passengers[0], ''))
addTicketToTrain(trains[0],'ticket_1', 88);
addTicketToTrain(trains[1],'ticket_2', 88);
addTicketToTrain(trains[2],'ticket_3', 90);
addTicketToTrain(trains[2],'ticket_4', 100);
addTicketToTrain(trains[2],'ticket_5', 300);
addTicketToTrain(trains[4],'ticket_6', 200);
addTicketToTrain(trains[3],'ticket_7', 180);
addTicketToTrain(trains[6],'ticket_8', 160);
//console.log(searchTrain(trains, 'train3'))
//console.log(trains)
console.log(most_popular_rote())
console.log(unpopular_rote())

class Train {
    constructor(name) {
        this.tickets = []
        this.name = name;
    }
}
class Passenger {
    constructor(name) {
        this.name = name;
    }
}

class Ticket {
    constructor(name) {
        this.name = name;

    }
}
var trains = []
var passengers = []
var tickets = []
//a
function addPassenger(name){
    passengers.push(new Passenger(name))
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
function addTrain(name){
    trains.push(new Train(name))
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
function addTicketToTrain(train,ticket_n, price){
    train.tickets.push(new Ticket(ticket_n, price));
}
//j
function changeTicket(train, new_train, ticket_n){

    train.tickets.splice(0,1);
    new_train.tickets.push(new Ticket(ticket_n));
}
//k
function cancellationOfTicketPurchase(train, index){
    train.tickets.splice(index,1);
}
//l
function func_min(){
  let soldTicketsLength = [];
  trains.forEach(elem => soldTicketsLength.push(elem.tickets.length));
  let min = Math.min(...soldTicketsLength);
  return trains.find(elem => elem.tickets.length===min);
}
function func_max(){
  let soldTicketsLength = [];
  trains.forEach(elem => soldTicketsLength.push(elem.tickets.length));
  let max = Math.max(...soldTicketsLength);
  return trains.find(elem => elem.tickets.length ===max);
}
addTrain('T1');
addTrain('T2');
addTrain('T3');
addTrain('T4');
addTrain('T5');
addTrain('T6');
//console.log(trains);
/**editTrain(trains,0,'T11');
console.log(trains);
removeTrain(trains,5);
console.log(trains);
console.log(searchTrain(trains,'T2'));**/
addPassenger('P1');
addPassenger('P2');
addPassenger('P3');
addPassenger('P4');
/**console.log(passengers);
editPassenger(passengers,1,'P22')
console.log(passengers);
removePassenger(passengers,3);
console.log(passengers);
console.log(searchPassenger(passengers,'P22'))**/
addTicketToTrain(trains[0],'ticket_1');
addTicketToTrain(trains[1],'ticket_2');
addTicketToTrain(trains[1],'ticket_3');
addTicketToTrain(trains[1],'ticket_4');
addTicketToTrain(trains[2],'ticket_5');
addTicketToTrain(trains[2],'ticket_6');
addTicketToTrain(trains[3],'ticket_7');
addTicketToTrain(trains[0],'ticket_8');
console.log(searchTrain(trains,'T2'));
/**cancellationOfTicketPurchase(trains[0],1);
console.log(searchTrain(trains,'T11'));
editTrainTicket(trains,0,0,trains,1);
console.log(searchTrain(trains,'T2'));**/
//console.log(trains[3])

//changeTicket(trains[3], trains[0], 'ticket_7');
//console.log(trains[0])
//console.log(trains[3])
//console.log(func_min())
//console.log(func_max())

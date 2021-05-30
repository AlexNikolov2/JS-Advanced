class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber){
        if(this.vehicles.length > this.capacity){
            throw new Error ('Not enough parking space.')
        }
        else{
            let car = {
                carModel,
                carNumber,
                payed: false
            };
            this.vehicles.push(car);
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }
    }
    removeCar(carNumber){
        if(!this.vehicles.hasOwnProperty(this.car)){
            throw new Error(`The car, you're looking for, is not found.`);
        }
        else if(this.vehicles[this.car.payed] === false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        else{
            this.vehicles = this.vehicles.filter(car => car.carNumber !== carNumber)
            return `${carNumber} left the parking lot.`;
        }
    }
    pay(carNumber){
        if(!this.vehicles.hasOwnProperty(this.car)){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        else if(this.vehicles[this.car.payed] === true){
            `${carNumber}'s driver has already payed his ticket.`;
        }
        else{
            this.vehicles[this.car.payed] = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    }
    getStatistics(carNumber){
        if(carNumber === undefined){
            let result = ''
            let sorted = Object.entries(vehicles).sort((a,b) => a.carModel.localeCompare(b.carModel));
            result += `The Parking Lot has ${this.vehicles.length - this.capacity} empty spots left.\n`
            sorted.forEach(car => {
                let isPayed;
                car.payed ? isPayed = `Has payed` : isPayed = "Not payed";
                result += `${car.carModel} == ${car.carNumber} - ${isPayed}\n`
            })
            return result.trim()
            
            
        }
    }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
//console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

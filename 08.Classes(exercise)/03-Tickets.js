function tickets(array, criteria) {

    let ticketsArray = [];
    for (const element of array) {
        let [destinationName, price, status] = element.split("|");
        price = Number(price);

        ticketsArray.push({destinationName, price, status});
    }
    let sorted;
    if(criteria === 'destination'){
        sorted = ticketsArray.sort((a,b) => a.destinationName.localeCompare(b.destinationName));
    }
    else if(criteria === 'price'){
        sorted = ticketsArray.sort((a,b) => a.price - b.price);
    }
    else if(criteria === 'status'){
        sorted = ticketsArray.sort((a,b) => a.status.localeCompare(b.status));
    }

    return sorted;
}
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));
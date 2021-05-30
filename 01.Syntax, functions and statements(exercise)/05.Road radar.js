function solve(kmh, zone){
    let allowed;

    if(zone === 'motorway'){
        allowed = 130;
        if(kmh <= allowed){
            console.log(`Driving ${kmh} km/h in a ${allowed} zone`);
        }
        else{
            let kazna = kmh - allowed;
            let status;
            if(kazna  <= 20){
                status = 'speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else if(kazna <= 40){
                status = 'excessive speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else{
                status = 'reckless driving'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
        }
    }
    else if(zone === 'interstate'){
        allowed = 90;
        if(kmh <= allowed){
            console.log(`Driving ${kmh} km/h in a ${allowed}} zone`);
        }
        else{
            let kazna = kmh - allowed;
            let status;
            if(kazna  <= 20){
                status = 'speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else if(kazna <= 40){
                status = 'excessive speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else{
                status = 'reckless driving'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
        }
    }
    else if(zone === 'city'){
        allowed = 50;
        if(kmh <= allowed){
            console.log(`Driving ${kmh} km/h in a ${allowed} zone`);
        }
        else{
            let kazna = kmh - allowed;
            let status;
            if(kazna  <= 20){
                status = 'speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else if(kazna <= 40){
                status = 'excessive speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else{
                status = 'reckless driving'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
        }
    }
    else if(zone === 'residential'){
        allowed = 20;
        if(kmh <= allowed){
            console.log(`Driving ${kmh} km/h in a ${allowed} zone`);
        }
        else{
            let kazna = kmh - allowed;
            let status;
            if(kazna  <= 20){
                status = 'speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else if(kazna <= 40){
                status = 'excessive speeding'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
            else{
                status = 'reckless driving'
                console.log(`The speed is ${kazna} km/h faster than the allowed speed of ${allowed} - ${status}`);
            }
        }
    }
}
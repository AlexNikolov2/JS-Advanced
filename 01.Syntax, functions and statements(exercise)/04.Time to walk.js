function solve(steps,steplength,kmh){
    const speed = kmh*1000/3600;
    const distance = steps * steplength;
    

    const rest = Math.floor(distance/500);
    const time = distance / speed + rest*60;

    const hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, '0');
    const minutes= Math.floor((time - hours*3600)/60).toFixed(0).padStart(2, '0');
    const seconds = time - hours*60*60 - minutes*60;
    return `${hours}:${minutes}:${seconds.toFixed(0).padStart(2, '0')}`
}

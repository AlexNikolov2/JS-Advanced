function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const daysButton = document.getElementById('daysBtn');
    const hoursButton = document.getElementById('hoursBtn');
    const minutesButton = document.getElementById('minutesBtn');
    const secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', function() {
        const daysOut = days.value;
        hours.value = daysOut * 24;
        minutes.value = daysOut * 1440;
        seconds.value = daysOut * 86400;
    });
 
    hoursButton.addEventListener('click', function() {
        let hoursOut = hours.value;
        days.value = hoursOut / 24;
        minutes.value = hoursOut * 60;
        seconds.value = hoursOut * 60 * 60;
    });
 
    minutesButton.addEventListener('click', function() {
        let minutesOut = minutes.value;
        hours.value = minutesOut / 60;
        days.value = minutesOut / 60 / 24;
        seconds.value = minutesOut * 60;
    });
 
    secondsButton.addEventListener('click', function() {
        let secondsOut = seconds.value;
        hours.value = secondsOut / 60 / 60;
        minutes.value = secondsOut / 60;
        days.value = secondsOut / 60 / 60 / 24;
    });
}
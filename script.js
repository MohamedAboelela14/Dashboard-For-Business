function displayTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();   


    let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;   


    let dateString = now.toDateString();

    document.querySelector('.time').textContent = timeString;
    document.querySelector('.date').textContent = dateString;
}

setInterval(displayTime, 1000); 
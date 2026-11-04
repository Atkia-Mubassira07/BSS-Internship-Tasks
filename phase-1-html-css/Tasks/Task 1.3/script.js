function updateClock() {
    const now = new Date();
    
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() + minutes / 60;

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
    requestAnimationFrame(updateClock);}


requestAnimationFrame(updateClock);
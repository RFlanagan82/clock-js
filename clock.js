function setDate() {
    //console.log ("Hi"); - See if Hi prints to console every 1 second

    //grab the second hand element from HTML so we can apply styling
    const secondHand = document.querySelector('.second-hand');
    
    //grab the minute hand element from HTML so we can apply styling
    const minHand = document.querySelector('.min-hand');

    //grab the hour hand element from HTML so we can apply styling
    const hourHand = document.querySelector('.hour-hand');

    //define what 'now' is.
    const now = new Date();

    //define seconds minutes and hours
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //match each second to a degree in a circle and have it start at the top
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds)

    //match each minute to a degree in a circle and have it start at the top
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    console.log(minutes)

    //match each minute to a degree in a circle and have it start at the top
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hours)

}

//Have the second hand run around every 1 seconds
setInterval(setDate, 1000)
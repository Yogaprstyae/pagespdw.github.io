function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var greeting = getGreeting(hour);
    var date = now.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' });
    var time = now.toLocaleTimeString("en-US", { hour12: false });

    document.getElementById("greeting").textContent = greeting;
    document.getElementById("clock").textContent = date + " " + time;
}

function getGreeting(hour) {
    if (hour < 12) {
    return "Good morning! Yoga";
    } else if (hour < 18) {
    return "Good afternoon! Yoga";
    } else {
    return "Good evening! Yoga";
    }
}

setInterval(updateClock, 1000);
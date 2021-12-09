/*

setInterval(function () {
    var time = new Date();
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    if (time.getHours < 10) {
        hours.innerHTML = "0" + time.getHours();
    } else {
        hours.innerHTML = time.getHours();
    }
    if (time.getMinutes() < 10) {
        minutes.innerHTML = "0" + time.getMinutes();
    } else {
        minutes.innerHTML = time.getMinutes();
    }
    if (time.getSeconds() < 10) {
        seconds.innerHTML = "0" + time.getSeconds();
    } else {
        seconds.innerHTML = time.getSeconds();
    }
}, 1000); */

setInterval(function () {
    let time = new Date();
    let currentHours = time.getHours();
    let currentMinutes = time.getMinutes();
    let currentSeconds = time.getSeconds();
    let currentDate = time.toLocaleDateString();

    if (currentHours < 10) {
        document.querySelector("#hours .char1 .live-char").innerHTML = "0";
        document.querySelector("#hours .char2 .live-char").innerHTML = currentHours;
    } else {
        let hourFirst = String(currentHours).charAt(0);
        let hourLast = String(currentHours).charAt(1);
        document.querySelector("#hours .char1 .live-char").innerHTML = hourFirst;
        document.querySelector("#hours .char2 .live-char").innerHTML = hourLast;
    }

    if (currentMinutes < 10) {
        document.querySelector("#minutes .char1 .live-char").innerHTML = "0";
        document.querySelector("#minutes .char2 .live-char").innerHTML = currentMinutes;
    } else {
        let minuteFirst = String(currentMinutes).charAt(0);
        let minuteLast = String(currentMinutes).charAt(1);
        document.querySelector("#minutes .char1 .live-char").innerHTML = minuteFirst;
        document.querySelector("#minutes .char2 .live-char").innerHTML = minuteLast;
    }

    if (currentSeconds < 10) {
        document.querySelector("#seconds .char1 .live-char").innerHTML = "0";
        document.querySelector("#seconds .char2 .live-char").innerHTML = currentSeconds;
    } else {
        let secondFirst = String(currentSeconds).charAt(0);
        let secondLast = String(currentSeconds).charAt(1);
        document.querySelector("#seconds .char1 .live-char").innerHTML = secondFirst;
        document.querySelector("#seconds .char2 .live-char").innerHTML = secondLast;
    }

    document.querySelector(".date").innerHTML = currentDate;


}, 1000);
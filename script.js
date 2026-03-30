function showAlert() {
    alert("Loading weather report...");
}

function acceptCookies() {
    document.getElementById("cookie-banner").remove();
}

function convertTemperatures(element) {
    const highs = document.querySelectorAll(".high");
    const lows = document.querySelectorAll(".low");

    for (let i = 0; i < highs.length; i++) {
        let highTemp = parseInt(highs[i].innerText);
        let lowTemp = parseInt(lows[i].innerText);

        if (element.value === "fahrenheit") {
            highs[i].innerText = Math.round((highTemp * 9 / 5) + 32) + "°";
            lows[i].innerText = Math.round((lowTemp * 9 / 5) + 32) + "°";
        } else {
            highs[i].innerText = Math.round((highTemp - 32) * 5 / 9) + "°";
            lows[i].innerText = Math.round((lowTemp - 32) * 5 / 9) + "°";
        }
    }
}
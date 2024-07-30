let homeScore = 0;
let guestScore = 0;

function addPoint(points, team) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('homeScore').innerText = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guestScore').innerText = guestScore;
    }
}

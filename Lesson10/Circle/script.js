let ball = document.getElementById('circle').style;

function moveBall(event) {
    ball.top = `${event.pageY - 25}px`;
    ball.left = `${event.pageX - 25}px`
}

document.addEventListener('mousemove', moveBall);
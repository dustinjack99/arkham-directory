let i = 0;
const txt = `Good evening, Mr. Wayne.
      Populating Arkham's current inmates...`;
const speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greetings").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

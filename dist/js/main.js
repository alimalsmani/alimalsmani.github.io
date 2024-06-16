document.addEventListener("DOMContentLoaded", function() {
  const text = "Hello, I am Ali Musa, a web application designer and developer, with experience in the latest design fields, and familiar with the latest UI/UX updates. Contact me to build amazing things together.\n SCROLL TO SEE AMAZINGS";
  const speed = 25; // Speed in milliseconds
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
document.addEventListener("DOMContentLoaded", () => {
  const countdown = () => {
    const eventDate = new Date("August 12, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        document.querySelector(".countdown").innerHTML = "🏏 Game On!";
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = String(days).padStart(2, '0');
      document.getElementById("hours").innerText = String(hours).padStart(2, '0');
      document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
      document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }, 1000);
  };

  countdown();
const footerHTML = `
<footer>
  <div class="footer-section">
    <h3>Blazing Stumps 2025</h3>
    <p>The Ultimate Under-19 Cricket Showdown organized by CMR NPS Bangalore, bringing together the best school teams from across Bangalore.</p>
    <div class="footer-socials">
      <a href="#"><i class="fab fa-facebook-f" style="color: white;"></i></a>
      <a href="#"><i class="fab fa-twitter" style="color: white;"></i></a>
      <a href="#"><i class="fab fa-instagram" style="color: white;"></i></a>
      <a href="#"><i class="fab fa-youtube" style="color: white;"></i></a>
    </div>
  </div>

  <div class="footer-section">
    <h3>Quick Links</h3>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="register.html">Register</a>
    <a href="contact.html">Contact</a>
  </div>

  <div class="footer-section">
    <h3>Tournament Info</h3>
    <a href="#">Rules & Regulations</a>
    <a href="#">Schedule</a>
    <a href="#">Venue</a>
    <a href="#">Prizes</a>
  </div>

  <div class="footer-section">
    <h3>Contact</h3>
    <p>📍 CMR University, Bangalore</p>
    <p>📞 +91 9876543210</p>
    <p>✉ info@blazingstumps.com</p>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Blazing Stumps | CMR NPS Bangalore</p>
    <p>Designed with ❤️ by the CMR Student Council</p>
  </div>
</footer>
`;

document.getElementById('footer-info').innerHTML = footerHTML;

});





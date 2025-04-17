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

  const footerInfo = `
    <div class="bg-green-900 text-white py-10 px-8 grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <h2 class="text-2xl font-bold text-yellow-400">Blazing Stumps 2025</h2>
        <p class="mt-2 text-white">The Ultimate Under-19 Cricket Showdown organized by CMR NPS Bangalore, bringing together the best school teams from across Bangalore.</p>
        <div class="flex gap-3 mt-4">
          <a href="#"><i class="fab fa-facebook-f bg-black p-2 rounded-full"></i></a>
          <a href="#"><i class="fab fa-twitter bg-black p-2 rounded-full"></i></a>
          <a href="#"><i class="fab fa-instagram bg-black p-2 rounded-full"></i></a>
          <a href="#"><i class="fab fa-youtube bg-black p-2 rounded-full"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-yellow-400">Quick Links</h3>
        <ul class="mt-2 space-y-1">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/about.html" class="hover:underline">About</a></li>
          <li><a href="/contact.html" class="hover:underline">Contact</a></li>
          <li><a href="/register.html" class="hover:underline">Register</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-yellow-400">Tournament Info</h3>
        <ul class="mt-2 space-y-1">
          <li><a href="/rules.html" class="hover:underline">Rules & Regulations</a></li>
          <li><a href="/schedule.html" class="hover:underline">Schedule</a></li>
          <li><a href="/venue.html" class="hover:underline">Venue Information</a></li>
          <li><a href="/prizes.html" class="hover:underline">Prizes & Awards</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-yellow-400">Contact Us</h3>
        <ul class="mt-2 space-y-1">
          <li><i class="fas fa-map-marker-alt mr-2"></i>CMR University, Bangalore</li>
          <li><i class="fas fa-phone mr-2"></i>+91 9876543210</li>
          <li><i class="fas fa-envelope mr-2"></i>info@blazingstumps.com</li>
        </ul>
      </div>
    </div>

    <div class="bg-green-800 text-white text-center py-4 text-sm">
      © 2025 Blazing Stumps. All Rights Reserved.<br>
      Designed with <span class="text-red-500">❤</span> by CMR NPS Team
    </div>
  `;

  document.getElementById("footer-info").innerHTML = footerInfo;
});





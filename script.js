document.addEventListener("DOMContentLoaded", () => {
    

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  
    function updateClock() {
      const clock = document.getElementById("clock");
      if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
      }
    }
    setInterval(updateClock, 1000);
    updateClock();
  
    
    document.querySelectorAll(".question").forEach((q) => {
      q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        if (answer) {
          answer.classList.toggle("visible");
        }
      });
    });
  
    

    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          backToTopBtn.style.display = "block";
        } else {
          backToTopBtn.style.display = "none";
        }
      });
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    

    const loadUsersBtn = document.getElementById("loadUsersBtn");
    if (loadUsersBtn) {
      loadUsersBtn.addEventListener("click", async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const users = await res.json();
          const userList = document.getElementById("userList");
          userList.innerHTML = "";
          users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
          });
        } catch (err) {
          console.error("Failed to load users:", err);
        }
      });
    }
  
  

    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const subject = contactForm.querySelector("#subject").value.trim();
        const message = contactForm.querySelector("#message").value.trim();
  
        if (!name || !email || !subject || !message) {
          alert("Please fill in all fields before submitting.");
        } else {
          alert(`Thank you, ${name}! Your message has been received.`);
          contactForm.reset();
        }
      });
    }
  });
  
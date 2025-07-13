  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.remove('bg-gradient-to-r', 'from-black', 'to-blue-800');
      navbar.classList.add('bg-linear-to-r/hsl', 'from-indigo-500', 'to-black');
    } else {
      navbar.classList.remove('bg-linear-to-r/hsl', 'from-indigo-500', 'to-teal-400');
      navbar.classList.add('bg-gradient-to-r', 'from-black', 'to-blue-800');
    }
  });



  const zoomImg = document.getElementById('zoomImg');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Adjust scale based on scroll position
    if (scrollY > 50) {
      zoomImg.style.transform = 'scale(1.4)';
    } else {
      zoomImg.style.transform = 'scale(1)';
    }
  });


  const target = document.getElementById("appear");

  window.addEventListener("scroll", () => {
    const targetTop = target.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (targetTop < windowHeight - 100) { // 100px before it's fully visible
      target.classList.remove("opacity-0", "translate-y-10");
      target.classList.add("opacity-100", "translate-y-0");
    }
  });


 const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lines = document.querySelectorAll('.line-animate');

          // Order lines manually by node
          const delays = [
            0,     
            300,   
            600,   
            900,  
            1200,  
            1500,  
            1800,  
            2100,  
          ];

          lines.forEach((line, index) => {
            setTimeout(() => {
              if (line.classList.contains('h-0')) {
                line.classList.add('h-16'); // or h-12
              }
              if (line.classList.contains('w-0')) {
                if (line.parentElement.classList.contains('w-[500px]')) {
                  line.classList.add('w-[367px]');
                } else {
                  line.classList.add('w-[665px]');
                }
              }
              line.classList.add('active');
            }, delays[index] || 0); // fallback to 0 if out of range
          });

          // Unobserve after first trigger (optional)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  const section = document.getElementById('teams-section');
  if (section) observer.observe(section);
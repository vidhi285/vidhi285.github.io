/* ===========================================================
   VIDHI SHAH — PORTFOLIO SCRIPT
   Modular sections: Data -> Loader -> Cursor -> Nav -> Hero FX
   -> Reveal -> Skills -> Projects -> Certs -> Counters ->
   Tilt -> Theme -> Form -> Footer
   =========================================================== */

/* ============ DATA ============ */

const SKILLS_DATA = [
  {
    category: "Programming Languages",
    icon: "fa-solid fa-code",
    skills: [
      { name: "Python", level: 80 },
    //   { name: "Java", level: 20 },
      { name: "C", level: 40 },
      { name: "JavaScript", level: 70 }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "fa-solid fa-brain",
    skills: [
      { name: "Deep Learning", level: 60 },
      { name: "Computer Vision (CNN)", level: 60 },
      { name: "NLP", level: 70 },
      { name: "Model Training & Data Processing", level: 90 }
    ]
  },
  {
    category: "Cloud",
    icon: "fa-brands fa-aws",
    skills: [
      { name: "AWS EC2 Deployment", level: 85 },
      { name: "AWS Glue / Athena / S3", level: 70 },
      { name: "Cloud Architecture", level: 50 }
    ]
  },
  {
    category: "Databases",
    icon: "fa-solid fa-database",
    skills: [
      { name: "MySQL", level: 100 },
      { name: "SQLite", level: 90 },
      { name: "Database Design", level: 100 }
    ]
  },
  {
    category: "Frontend",
    icon: "fa-solid fa-display",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "CSS", level: 65 },
      { name: "Responsive UI/UX Design", level: 85 }
    ]
  },
  {
    category: "Tools",
    icon: "fa-solid fa-screwdriver-wrench",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "NetBeans", level: 70 },
       { name: "Android Studio", level: 75 },
      { name: "Antigravity IDE / CLI", level: 60 }
    ]
  }
];

function forceDownload(e, url, filename) {
  e.preventDefault();
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
      URL.revokeObjectURL(a.href);
    });
}

const PROJECTS_DATA = [
  {
    title: "Vegetable Classifier",
    category: "AI/ML",
    image: "assets/projects/vegetable-classifier.png",
    description: "Real-time AI vegetable classification system using CNNs, trained on 10,000+ images to identify produce like ivy gourd, lady finger and chilli with high accuracy.",
    tech: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    features: [
      "Trained CNN on 10,000+ labeled images",
      "Real-time image preprocessing pipeline",
      "Live prediction with confidence scoring"
    ],
    github: "https://github.com/vidhi285/vegetable_classifier",
    demo: null
  },
  {
    title: "Real-Time Sentiment Analysis System",
    category: "AI/ML",
    image: "assets/projects/sentiment-analysis.png",
    description: "AI-powered system that classifies YouTube comments into positive, neutral and negative sentiment, deployed on AWS EC2 for scalable real-time processing.",
    tech: ["Python", "NLP", "TensorFlow", "YouTube API", "AWS EC2"],
    features: [
      "Trained on 3M+ comment records plus 1,000+ emoji images",
      "Live YouTube comment extraction via API",
      "Cloud-deployed on AWS EC2 with data visualization"
    ],
    github: "https://github.com/vidhi285/Sentiment-Analysis",
    demo: null
  },
  {
    title: "Python to C Converter",
    category: "Software",
    image: "assets/projects/python-to-c.png",
    description: "GUI-based compiler design tool that translates basic Python syntax into equivalent C code, supporting loops, conditionals and I/O operations.",
    tech: ["Python", "Tkinter", "Compiler Design"],
    features: [
      "Syntax translation engine for core constructs",
      "Interactive Tkinter GUI",
      "Supports loops, conditionals and comments"
    ],
    github: "https://github.com/vidhi285/Python-to-C-Converter",
    demo: null
  },
  {
    title: "3D Solar System Simulation",
    category: "Graphics",
    image: "assets/projects/solar-system.png",
    description: "Interactive 3D simulation of planetary motion and orbital systems, combining real-time rendering with hand-built 3D models.",
    tech: ["Python", "OpenGL", "Pygame", "Blender"],
    features: [
      "Animated planetary rotation and orbit paths",
      "Custom 3D models built in Blender",
      "Real-time interactive rendering"
    ],
    github: null,
    demo: null
  },
  {
    title: "Expense Tracker Application",
    category: "Android",
    image: "assets/projects/expense-tracker.png",
    description: "Android application for tracking daily expenses and managing personal finances with a clean, intuitive interface.",
    tech: ["Android Studio", "Java", "SQLite"],
    features: [
      "Add, update and track expense records",
      "Local data persistence with SQLite",
      "Spending insights for budget management"
    ],
    github: null,
    demo: null
  },
  {
    title: "Event Management Mobile App",
    category: "Android",
    image: "assets/projects/event-management.png",
    description: "Mobile application for Navrachana University events, enabling registration, schedule viewing and program details access.",
    tech: ["Android Studio", "Java", "Room Database"],
    features: [
      "Event registration and authentication",
      "Schedule and program browsing",
      "Room Database for local storage"
    ],
    github: null,
    demo: null
  },
  {
    title: "AI-Powered Chatbot Application",
    category: "AI/ML",
    image: "assets/projects/chatbot.png",
    description: "A mini AI-powered chatbot mobile application built for interactive, real-time communication with a focus on accessibility.",
    tech: ["MIT App Inventor", "UI/UX Design"],
    features: [
      "Conversational response handling",
      "Simple, accessible mobile interface",
      "Smooth real-time interaction flow"
    ],
    github: null,
    demo: null
  },
  {
    title: "Surgical Product Manufacturing System",
    category: "Software",
    image: "assets/projects/surgical-management.png",
    description: "Desktop management system for handling employees, suppliers, customers, products, orders and payments for a manufacturing business.",
    tech: ["Java", "Java Swing", "MySQL"],
    features: [
      "Full CRUD operations across six modules",
      "Java Swing desktop interface",
      "Structured relational database design"
    ],
    github: null,
    demo: null
  },
  {
    title: "Games Using Tkinter",
    category: "Software",
    image: "assets/projects/tkinter-games.png",
    description: "A trio of interactive desktop games — Tic Tac Toe, Pong and Memory Puzzle — built with Python Tkinter.",
    tech: ["Python", "Tkinter", "OOP"],
    features: [
      "Three fully playable desktop games",
      "Custom event handling and score tracking",
      "Object-oriented game logic"
    ],
    github: "https://github.com/vidhi285/Python-Tkinter-Project",
    demo: null
  },
  {
    title: "Watch Website",
    category: "Web",
    image: "assets/projects/watch-website.png",
    description: "E-commerce website for browsing and purchasing branded watches, with responsive product listings and a smooth shopping flow.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive product listing pages",
      "Pricing and product detail views",
      "Mobile-first e-commerce layout"
    ],
    github: null,
    demo: null
  },
  {
    title: "Web Post/Chat Application (Flask)",
    category: "Web",
    image: "assets/projects/flask-social.png",
    description: "An Instagram-style web application built with Flask, supporting posts, content interaction and real-time chat.",
    tech: ["Flask", "Python", "HTML", "CSS"],
    features: [
      "User post creation and interaction",
      "Real-time chat functionality",
      "Backend data management with Flask"
    ],
    github: null,
    demo: null
  },
  {
    title: "Goa Tourism Website",
    category: "Web",
    image: "assets/projects/goa-tourism.png",
    description: "An informational tourism website showcasing Goa's attractions, hotels and restaurants with a responsive, accessible layout.",
    tech: ["HTML", "CSS", "Responsive Design"],
    features: [
      "Curated attraction and hotel listings",
      "Responsive layout across devices",
      "Clean, accessible navigation"
    ],
    github: null,
    demo: null
  }
];

const CERTS_DATA = [
  {
    name: "AWS Academy Graduate — Data Engineering",
    org: "Amazon Web Services (AWS) Academy",
    badge: "assets/certificates/aws-data-engineering.png",
    icon: "fa-brands fa-aws",
    description: "40 hours of training covering ETL workflows, data pipelines, AWS Glue, Athena and S3 for large-scale data processing.",
    skills: ["AWS Glue", "AWS Athena", "Amazon S3", "ETL", "Big Data"]
  },
  {
    name: "AWS Academy Graduate — Machine Learning Foundations",
    org: "Amazon Web Services (AWS) Academy",
    badge: "assets/certificates/aws-ml-foundations.png",
    icon: "fa-brands fa-aws",
    description: "20 hours of training in ML concepts, NLP, computer vision and generative AI fundamentals using AWS ML services.",
    skills: ["NLP", "Computer Vision", "Generative AI", "Model Training"]
  },
  {
    name: "AWS Academy Graduate — Cloud Foundations",
    org: "Amazon Web Services (AWS) Academy",
    badge: "assets/certificates/aws-cloud-foundations.png",
    icon: "fa-brands fa-aws",
    description: "20 hours covering AWS core services, cloud architecture, security principles and pricing models.",
    skills: ["AWS Core Services", "Cloud Architecture", "Cloud Security"]
  },
  {
    name: "Google Antigravity Learning Badge",
    org: "Google for Developers",
    badge: "assets/certificates/google-antigravity.png",
    icon: "fa-brands fa-google",
    description: "Hands-on exposure to agentic engineering, AI-assisted development workflows and intent-driven software development.",
    skills: ["Agentic AI", "Prompt Engineering", "AI-Assisted Development"]
  },
  {
    name: "Diploma in Computer Application (DCA)",
    org: "Jan Jagruti Saksharta Abhiyan",
    badge: "assets/certificates/dca-certificate.png",
    icon: "fa-solid fa-certificate",
    description: "Completed with an aggregate of 80/100, covering computer fundamentals, MS Office, HTML basics and Tally accounting.",
    skills: ["MS Office", "HTML Basics", "Documentation"]
  }
];

const TYPING_ROLES = [
  "Software Developer",
  "AI Enthusiast",
  "Machine Learning Engineer",
  "Cloud Learner",
  "Android Developer",
  "Database Enthusiast"
];

/* ============ LOADER ============ */
(function initLoader() {
  const loader    = document.getElementById("loader");
  const nameEl    = document.getElementById("loaderName");
  const subtitle  = document.getElementById("loaderSubtitle");
  const barFill   = document.getElementById("loaderBarFill");
  const barWrap   = barFill ? barFill.parentElement : null;
  const canvas    = document.getElementById("loaderCanvas");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Canvas background: particles + neural lines ---- */
  (function loaderCanvas() {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, dots = [], raf;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const DOT_COUNT = Math.min(Math.floor(W * H / 14000), 65);
    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        alpha: Math.random() * 0.35 + 0.08
      });
    }

    /* Radial gradient blobs — drawn once as backdrop */
    function drawBlobs() {
      const blobs = [
        { x: W * 0.15, y: H * 0.25, r: W * 0.28, c1: "rgba(108,99,255,0.07)", c2: "transparent" },
        { x: W * 0.85, y: H * 0.7,  r: W * 0.25, c1: "rgba(0,229,255,0.05)", c2: "transparent" }
      ];
      blobs.forEach(b => {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.c1);
        g.addColorStop(1, b.c2);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      drawBlobs();

      /* Neural connection lines */
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.07;
            ctx.strokeStyle = `rgba(108,99,255,${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      /* Dots */
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${d.alpha})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    /* Stop canvas when loader exits */
    loader._stopCanvas = () => { cancelAnimationFrame(raf); };
  })();

  /* ---- Letter-by-letter name animation ---- */
  const NAME = "VIDHI SHAH";
  const LETTER_DELAY = 30; // ms between letters

  function buildName() {
    nameEl.innerHTML = "";
    return Array.from(NAME).map((ch, i) => {
      const span = document.createElement("span");
      if (ch === " ") {
        span.className = "loader-letter space";
        span.setAttribute("aria-hidden", "true");
      } else {
        span.className = "loader-letter";
        span.textContent = ch;
      }
      nameEl.appendChild(span);
      return span;
    });
  }

  function animateLetters(letters) {
    return new Promise(resolve => {
      if (reducedMotion) {
        letters.forEach(l => l.classList.add("visible"));
        resolve();
        return;
      }
      letters.forEach((letter, i) => {
        setTimeout(() => {
          letter.classList.add("visible");
          if (i === letters.length - 1) {
            setTimeout(resolve, 520); // wait for last letter's transition
          }
        }, i * LETTER_DELAY);
      });
    });
  }

  /* ---- Fake-but-honest progress bar ---- */
  /* Smoothly advances to ~85% while page loads, then jumps to 100% on load */
  let currentProgress = 0;
  let targetProgress  = 0;
  let barRaf;

  function startBar() {
    if (barWrap) barWrap.classList.add("visible");
    advanceBar();
  }

  function advanceBar() {
    /* Organically creep toward target */
    if (currentProgress < targetProgress) {
      currentProgress = Math.min(currentProgress + (targetProgress - currentProgress) * 0.06 + 0.3, targetProgress);
      barFill.style.width = currentProgress + "%";
    }
    barRaf = requestAnimationFrame(advanceBar);
  }

  /* Simulate realistic progress milestones */
  function simulateProgress() {
    const milestones = [
      { pct: 20, delay: 100  },
      { pct: 45, delay: 350  },
      { pct: 68, delay: 650  },
      { pct: 82, delay: 900  }
    ];
    milestones.forEach(m => {
      setTimeout(() => { targetProgress = Math.max(targetProgress, m.pct); }, m.delay);
    });
  }

  function completeBar() {
    return new Promise(resolve => {
      cancelAnimationFrame(barRaf);
      targetProgress = 100;
      /* Animate remaining distance */
      function finish() {
        if (currentProgress < 100) {
          currentProgress = Math.min(currentProgress + 1.8, 100);
          barFill.style.width = currentProgress + "%";
          requestAnimationFrame(finish);
        } else {
          barFill.style.width = "100%";
          setTimeout(resolve, 220);
        }
      }
      finish();
    });
  }

  /* ---- Exit ---- */
  function exitLoader() {
    if (loader._stopCanvas) loader._stopCanvas();
    loader.classList.add("exit");
    setTimeout(() => {
      loader.style.display = "none";
      loader.remove();
    }, 750);
  }

  /* ---- Sequence ---- */
  async function run() {
    const letters = buildName();
    startBar();
    simulateProgress();
    await animateLetters(letters);

    /* Show subtitle after name finishes */
    subtitle.classList.add("visible");

    /* Wait for page load (or a safety max of 4s) */
    await Promise.race([
      new Promise(resolve => window.addEventListener("load", resolve, { once: true })),
      new Promise(resolve => setTimeout(resolve, 4000))
    ]);

    await completeBar();
    await new Promise(resolve => setTimeout(resolve, 300));
    exitLoader();
  }

  run();
})();

/* ============ CUSTOM CURSOR ============ */
(function initCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring || window.matchMedia("(hover: none)").matches) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll("a, button, input, textarea").forEach(el => {
    el.addEventListener("mouseenter", () => { ring.style.width = "50px"; ring.style.height = "50px"; ring.style.opacity = "0.4"; });
    el.addEventListener("mouseleave", () => { ring.style.width = "32px"; ring.style.height = "32px"; ring.style.opacity = "0.7"; });
  });
})();

/* ============ NAVBAR ============ */
(function initNav() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const scrollFill = document.getElementById("scrollProgressFill");

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollFill.style.width = progress + "%";

    // Active link highlighting
    const sections = document.querySelectorAll("section[id]");
    let current = "home";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active-link", link.getAttribute("href") === "#" + current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ============ THEME TOGGLE ============ */
(function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector("i");
  const saved = localStorage.getItem("portfolio-theme");

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      icon.className = "fa-solid fa-sun";
    } else {
      document.documentElement.removeAttribute("data-theme");
      icon.className = "fa-solid fa-moon";
    }
  }

  applyTheme(saved || "dark");

  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("portfolio-theme", next);
  });
})();

/* ============ HERO: TYPING EFFECT ============ */
(function initTyping() {
  const el = document.getElementById("typingText");
  if (!el) return;
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = TYPING_ROLES[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % TYPING_ROLES.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

/* ============ GLOBAL BACKGROUND PARTICLES ============ */
(function initGlobalParticles() {
  const canvas = document.getElementById("globalParticles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", () => { resize(); particles = []; build(); });

  function build() {
    const count = Math.min(Math.floor((w * h) / 12000), 80);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        alpha: Math.random() * 0.4 + 0.1
      });
    }
  }
  build();

  function draw() {
    ctx.clearRect(0, 0, w, h);

    /* Faint neural lines */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(108,99,255,${(1 - dist / 120) * 0.06})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    /* Dots */
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,229,255,${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ============ HERO: PARTICLES ============ */
(function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const count = window.innerWidth < 768 ? 35 : 70;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,229,255,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ============ HERO: MOUSE PARALLAX GLOW ============ */
(function initMouseGlow() {
  const glow = document.getElementById("mouseGlow");
  const hero = document.querySelector(".hero");
  if (!glow || !hero) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + "px";
    glow.style.top = (e.clientY - rect.top) + "px";
  });
})();

/* ============ SCROLL REVEAL (Intersection Observer) ============ */
(function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
})();

/* ============ SKILLS RENDER ============ */
(function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  SKILLS_DATA.forEach((cat, ci) => {
    const card = document.createElement("div");
    card.className = "skill-category";
    card.setAttribute("data-reveal", "");

    let rows = "";
    cat.skills.forEach((s, si) => {
      rows += `
        <div class="skill-row">
          <div class="skill-row-top"><span>${s.name}</span><span>${s.level}%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
        </div>`;
    });

    card.innerHTML = `<h3><i class="${cat.icon}"></i> ${cat.category}</h3>${rows}`;
    grid.appendChild(card);
  });

  // animate bars + reveal newly injected cards
  const newReveals = grid.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.15 });
  newReveals.forEach(el => revealObserver.observe(el));

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-bar-fill").forEach(bar => {
          bar.style.width = bar.dataset.level + "%";
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  grid.querySelectorAll(".skill-category").forEach(el => barObserver.observe(el));
})();

/* ============ PROJECTS RENDER + FILTER + SEARCH ============ */
(function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const filtersWrap = document.getElementById("projectFilters");
  const searchInput = document.getElementById("projectSearch");
  const noResults = document.getElementById("noResults");
  if (!grid) return;

  const categories = ["All", ...new Set(PROJECTS_DATA.map(p => p.category))];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.dataset.cat = cat;
    btn.setAttribute("role", "tab");
    filtersWrap.appendChild(btn);
  });

  function placeholderIcon(category) {
    const map = { "AI/ML": "fa-brain", "Software": "fa-laptop-code", "Graphics": "fa-cube", "Android": "fa-mobile-screen", "Web": "fa-globe" };
    return map[category] || "fa-diagram-project";
  }

  function cardHTML(p) {
    const githubBtn = p.github ? `<a href="${p.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>` : "";
    const demoBtn = p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : "";
    return `
      <article class="project-card tilt-card" data-cat="${p.category}" data-search="${(p.title + " " + p.tech.join(" ") + " " + p.description).toLowerCase()}">
        <div class="project-img">
          <img src="${p.image}" alt="${p.title} screenshot" loading="lazy"
               onerror="this.style.display='none'; this.parentElement.querySelector('.ph-icon').style.display='flex';" />
          <div class="ph-icon" style="display:none;"><i class="fa-solid ${placeholderIcon(p.category)}"></i></div>
        </div>
        <div class="project-body">
          <span class="project-cat">${p.category}</span>
          <h3>${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
          <ul class="project-features">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
          <div class="project-links">${githubBtn}${demoBtn}</div>
        </div>
      </article>`;
  }

  function render(list) {
    grid.innerHTML = list.map(cardHTML).join("");
    noResults.hidden = list.length > 0;
    grid.querySelectorAll(".project-card").forEach(card => {
      card.setAttribute("data-reveal", "");
      card.classList.add("is-visible");
    });
  }

  render(PROJECTS_DATA);

  let activeCat = "All";
  filtersWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filtersWrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCat = btn.dataset.cat;
    applyFilters();
  });

  searchInput.addEventListener("input", applyFilters);

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = PROJECTS_DATA.filter(p => {
      const matchCat = activeCat === "All" || p.category === activeCat;
      const matchSearch = !query || (p.title + " " + p.tech.join(" ") + " " + p.description).toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
    render(filtered);
  }
})();

/* ============ CERTIFICATIONS RENDER ============ */
(function renderCerts() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  grid.innerHTML = CERTS_DATA.map(c => `
    <div class="cert-card tilt-card" data-reveal>
      <div class="cert-badge">
        <img src="${c.badge}" alt="${c.name} badge"
             onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'${c.icon}\\'></i>';" />
      </div>
      <h3>${c.name}</h3>
      <p class="cert-org">${c.org}</p>
      <p class="cert-desc">${c.description}</p>
      <div class="cert-skills">${c.skills.map(s => `<span>${s}</span>`).join("")}</div>
    </div>
  `).join("");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.15 });
  grid.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
})();


/* ============ ANIMATED COUNTERS ============ */
// (function initCounters() {
//   const counters = document.querySelectorAll(".counter-num");
//   if (!counters.length) return;

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) return;
//       const el = entry.target;
//       const target = parseInt(el.dataset.target, 10);
//       let count = 0;
//       const step = Math.max(1, Math.ceil(target / 60));
//       const tick = () => {
//         count += step;
//         if (count >= target) { el.textContent = target; return; }
//         el.textContent = count;
//         requestAnimationFrame(tick);
//       };
//       tick();
//       observer.unobserve(el);
//     });
//   }, { threshold: 0.5 });

//   counters.forEach(c => observer.observe(c));
// })();

/* ============ 3D TILT EFFECT ============ */
(function initTilt() {
  const cards = document.querySelectorAll(".tilt-card");
  if (window.matchMedia("(hover: none)").matches) return;

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * -8;
      const rotateY = ((x - rect.width / 2) / rect.width) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  // Delegate tilt to dynamically-added project/cert cards
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".project-card, .cert-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  document.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".project-card, .cert-card");
    if (card) card.style.transform = "";
  });
})();

/* ============ CONTACT FORM ============ */
(function initForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.style.color = "#EF4444";
      status.textContent = "Please fill in all fields before sending.";
      return;
    }

    // No backend connected — open the user's mail client with a pre-filled message.
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:vidhishah2856@gmail.com?subject=${subject}&body=${body}`;

    status.style.color = "var(--success)";
    status.textContent = "Opening your email client to send this message...";
    form.reset();
  });
})();

/* ============ FOOTER: CLOCK, DATE, YEAR, VISITORS ============ */
(function initFooter() {
  const clockEl = document.getElementById("liveClock");
  const dateEl = document.getElementById("liveDate");
  const yearEl = document.getElementById("footerYear");
  const visitorEl = document.getElementById("visitorCount");

  function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString();
    dateEl.textContent = now.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  updateClock();
  setInterval(updateClock, 1000);

  yearEl.textContent = new Date().getFullYear();

  let visits = parseInt(sessionStorage.getItem("portfolio-visits") || "0", 10) + 1;
  sessionStorage.setItem("portfolio-visits", String(visits));
  visitorEl.textContent = visits;
})();

/* ============ BACK TO TOP ============ */
(function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ============ RIPPLE CLICK EFFECT ============ */
(function initRipple() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest(".btn, .icon-btn, .filter-btn, .social-icon");
    if (!target) return;

    const ripple = document.createElement("span");
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position:absolute; border-radius:50%; pointer-events:none;
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size / 2}px; top:${e.clientY - rect.top - size / 2}px;
      background:rgba(255,255,255,0.35); transform:scale(0); opacity:1;
      animation: rippleAnim 0.6s ease-out forwards; z-index: 0;
    `;
    target.style.position = target.style.position || "relative";
    target.style.overflow = "hidden";
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });

  const style = document.createElement("style");
  style.textContent = `@keyframes rippleAnim { to { transform: scale(2.5); opacity: 0; } }`;
  document.head.appendChild(style);
})();
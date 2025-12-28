const rolesTranslations = {
  en: [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "React Developer",
    "Full-Stack Developer",
    "API Integrations",
  ],
  sr: [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "React Developer",
    "Full-Stack Developer",
    "API Integracije",
  ],
};
let currentLang = "en";
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function type() {
  const roles = rolesTranslations[currentLang];
  const fullText = roles[currentIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  typingElement.textContent = currentText;

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentText === fullText) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// Language Switcher
const translations = {
  en: {
    hero: {
      title: "Web Development",
      description:
        "Hey there, I am Ivan. I am a Software Engineer and I create responsive, user-friendly websites and web applications using JavaScript, React, Node.js, Python, HTML, CSS, and Tailwind. I also work with APIs, CRUD operations, FastAPI, and MySQL, bringing backend experience to build reliable, scalable, and optimized solutions.",
    },
    about: {
      title: "What's important to me",
      intro:
        "I believe that development should be more than just code; it should effectively solve problems and create engaging experiences. My goal is to build applications that resonate and leave a lasting impact.",
      card1Title: "Modern Technologies",
      card1Desc:
        "Building with cutting-edge tools and frameworks to create fast, responsive, and scalable applications. I work with:",
      card2Title: "User-centered design",
      card2Desc:
        "Designing with the end-user in mind is key. Every decision is focused on creating intuitive and visually appealing designs that provide users with the best experience, ensuring their voice is reflected in every project.",
      card3Title: "Full-stack capabilities",
      card3Desc:
        "From front-end to back-end, I leverage modern technologies to build complete solutions:",
      card4Title: "Continuous learning",
      card4Desc:
        "I constantly strive to learn new skills and stay ahead of the game. I enjoy tackling complex challenges and exploring new trends, and I thrive on creating innovative solutions that make a lasting impression.",
    },
    education: {
      title: "Education & Experience",
      educationLabel: "Education",
      experienceLabel: "Experience",
      items: {
        0: {
          title: "Bachelor of Science — Computer Science",
          subtitle: "Pan-European University 'APEIRON' | Banja Luka, BiH",
          description:
            "Studied Computer Science with a focus on Programming and Software Engineering. Gained strong foundations in algorithms, software design, databases, web technologies, and applied computer science.",
        },
        1: {
          title: "CS50x — Introduction to Computer Science",
          subtitle: "HarvardX",
          description:
            "Broad introduction to computer science covering C, Python, algorithms, data structures, SQL, web development, and system design.",
        },
        2: {
          title: "CS50p — Programming with Python",
          subtitle: "HarvardX",
          description:
            "Focused exclusively on Python programming, covering OOP, testing, exception handling, libraries, and real-world software development.",
        },
        3: {
          title: "Frontend Expert Certification",
          subtitle: "Frontend Expert / DesignCourse",
          description:
            "Specialized training in modern frontend development including HTML, CSS, JavaScript, UI/UX principles, responsive design, and best practices.",
        },
        4: {
          title: "L2 Technical Support Specialist – Payments & Systems",
          subtitle: "NCR Voyix | Banja Luka, BiH",
          description:
            "Providing advanced technical support for NCR Payments Gateway, resolving escalated payment and system issues, optimizing performance using Splunk and XML analysis, mentoring L1 agents, creating internal tools and documentation using HTML/CSS/JavaScript, and collaborating with engineering teams to resolve critical incidents.",
        },
        5: {
          title: "L1 Technical Support Specialist – Payments & Systems",
          subtitle: "NCR Voyix | Banja Luka, BiH",
          description:
            "Supported government, retail, and hospitality clients on NCR Voyix Payments Gateway. Troubleshot transactions, refunds, and payment flow issues, analyzed XML logs, resolved PIN pad hardware issues, and maintained high client satisfaction through clear communication and efficient problem-solving.",
        },
        6: {
          title: "Information Technology Associate",
          subtitle: "Pan-European University APEIRON | Banja Luka, BiH",
          description:
            "Managed and improved the university WordPress website with custom CSS/JavaScript, provided technical support to staff and students, maintained student records, assisted in online learning setup, and contributed to visual and digital content for events.",
        },
      },
    },
    projects: {
      title: "Projects",
      projectNames: [
        "NCR Voyix Agent Tool",
        "Vatroservis Centar",
        "SweetForma",
        "MI Studio - Visual & Print Studio",
      ],
    },
    pricing: {
      title: "Pricing",
      static: {
        title: "Static Website",
        subtitle:
          "Perfect for portfolios, landing pages, and informational sites",
        period: "One-time payment",
        features: [
          "Modern, responsive design",
          "Fast loading times",
          "SEO optimized",
          "Mobile-first approach",
          "Cross-browser compatible",
          "Contact forms",
          "Basic animations",
        ],
      },
      dynamic: {
        badge: "Most Popular",
        title: "Dynamic Website",
        subtitle:
          "Interactive sites with advanced functionality and user experiences",
        period: "One-time payment",
        features: [
          "Everything in Static",
          "React components",
          "Dynamic content management",
          "User authentication",
          "API integrations",
          "Database connectivity",
          "Real-time updates",
          "Interactive dashboards",
        ],
      },
      custom: {
        title: "Custom Solutions",
        subtitle:
          "Full-stack applications with custom backend and advanced features",
        period: "Based on project scope",
        features: [
          "Everything in Dynamic",
          "Custom Python backend",
          "RESTful API development",
          "Complex database design",
          "Third-party integrations",
          "Payment processing",
          "Admin panels",
          "Cloud deployment",
          "Scalable architecture",
          "Ongoing support",
        ],
      },
      cta: {
        title: "Ready to start your project?",
        subtitle:
          "Let's discuss your requirements and bring your vision to life",
        button: "Contact Me",
      },
    },
    modal: {
      title: "Let's Work Together",
      subtitle:
        "Fill out the form below and I'll get back to you within 24 hours",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      projectLabel: "Project Type",
      messageLabel: "Message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      projectPlaceholder: "e.g., Dynamic Website, Custom Solution",
      messagePlaceholder: "Tell me about your project...",
      submitButton: "Send Message",
      contactMethods: ["Email", "LinkedIn", "GitHub"],
    },
    footer: {
      timezone: "CET",
      copyright: "Ivan Pavlović © 2025",
      contact: "Get in touch at:",
    },
  },

  sr: {
    hero: {
      title: "Web Development",
      description:
        "Zdravo, ja sam Ivan. Ja sam Softverski Inženjer i pravim responzivne, jednostavne za korištenje veb sajtove i veb aplikacije koristeći JavaScript, React, Node.js, Python, HTML, CSS i Tailwind. Također radim sa API-jevima, CRUD operacijama, FastAPI-jem i MySQL-om, donoseći iskustvo sa backend-a kako bih pravio pouzdana, skalabilna i optimizovana riješenja.",
    },
    about: {
      title: "Šta mi je važno",
      intro:
        "Verujem da razvoj treba da bude više od pukog koda; treba da efikasno rešava probleme i stvara zanimljiva iskustva. Moj cilj je da gradim aplikacije koje rezonuju i ostavljaju trajan uticaj.",
      card1Title: "Moderne tehnologije",
      card1Desc:
        "Gradnja sa vrhunskim alatima i okvirima za kreiranje brzih, responzivnih i skalabilnih aplikacija. Radim sa:",
      card2Title: "Korisnički centriran dizajn",
      card2Desc:
        "Dizajniranje sa krajnjim korisnikom na umu je ključno. Svaka odluka je fokusirana na kreiranje intuitivnih i vizuelno privlačnih dizajna koji pružaju korisnicima najbolje iskustvo, osiguravajući da se njihov glas ogleda u svakom projektu.",
      card3Title: "Full-stack sposobnosti",
      card3Desc:
        "Od front-enda do back-enda, koristim moderne tehnologije za izgradnju kompletnih rešenja:",
      card4Title: "Kontinuirano učenje",
      card4Desc:
        "Konstantno težim da učim nove veštine i ostanem ispred igre. Uživam u rešavanju složenih izazova i istraživanju novih trendova, i napredujem u kreiranju inovativnih rešenja koja ostavljaju trajan utisak.",
    },
    education: {
      title: "Obrazovanje i iskustvo",
      educationLabel: "Obrazovanje",
      experienceLabel: "Iskustvo",
      items: {
        0: {
          title: "Bachelor nauka — Računarstvo",
          subtitle: "Panevropski univerzitet 'APEIRON' | Banja Luka, BiH",
          description:
            "Studirao sam računarstvo sa fokusom na programiranje i softversko inženjerstvo. Stekao sam čvrste osnove u algoritmima, dizajnu softvera, bazama podataka, web tehnologijama i primenjenom računarstvu.",
        },
        1: {
          title: "CS50x — Uvod u računarstvo",
          subtitle: "HarvardX",
          description:
            "Širok uvod u računarstvo koji pokriva C, Python, algoritme, strukture podataka, SQL, web razvoj i dizajn sistema.",
        },
        2: {
          title: "CS50p — Programiranje u Pythonu",
          subtitle: "HarvardX",
          description:
            "Fokusiran isključivo na Python programiranje, pokriva OOP, testiranje, obradu izuzetaka, biblioteke i razvoj softvera u stvarnom svetu.",
        },
        3: {
          title: "Frontend ekspert sertifikat",
          subtitle: "Frontend Expert / DesignCourse",
          description:
            "Specijalizovana obuka u modernom frontend razvoju uključujući HTML, CSS, JavaScript, UI/UX principe, responzivni dizajn i najbolje prakse.",
        },
        4: {
          title: "L2 Tehnička podrška specijalista – Plaćanja i sistemi",
          subtitle: "NCR Voyix | Banja Luka, BiH",
          description:
            "Pružanje napredne tehničke podrške za NCR Payments Gateway, rešavanje eskaliranih problema sa plaćanjima i sistemima, optimizacija performansi koristeći Splunk i XML analizu, mentorstvo L1 agenata, kreiranje internih alata i dokumentacije koristeći HTML/CSS/JavaScript, i saradnja sa inženjerskim timovima za rešavanje kritičnih incidenata.",
        },
        5: {
          title: "L1 Tehnička podrška specijalista – Plaćanja i sistemi",
          subtitle: "NCR Voyix | Banja Luka, BiH",
          description:
            "Podržavao sam vladine, maloprodajne i ugostiteljske klijente na NCR Voyix Payments Gateway. Rešavao sam probleme sa transakcijama, povraćajima i problemima sa tokom plaćanja, analizirao XML logove, rešavao hardverske probleme PIN padova i održavao visoko zadovoljstvo klijenata kroz jasnu komunikaciju i efikasno rešavanje problema.",
        },
        6: {
          title: "Asistent za informacione tehnologije",
          subtitle: "Panevropski univerzitet APEIRON | Banja Luka, BiH",
          description:
            "Upravljao sam i poboljšavao univerzitetski WordPress sajt sa prilagođenim CSS/JavaScript-om, pružao tehničku podršku osoblju i studentima, vodio evidenciju o studentima, pomagao u postavljanju online učenja i doprinosio vizuelnom i digitalnom sadržaju za događaje.",
        },
      },
    },
    projects: {
      title: "Projekti",
      projectNames: [
        "NCR Voyix Agent Tool",
        "Vatroservis Centar",
        "SweetForma",
        "MI Studio - Visual & Print Studio",
      ],
    },
    pricing: {
      title: "Cenovnik",
      static: {
        title: "Statički vebsajt",
        subtitle:
          "Savršen za portfolije, odredišne stranice i informativne sajtove",
        period: "Jednokratna uplata",
        features: [
          "Moderan, responzivan dizajn",
          "Brzo učitavanje",
          "SEO optimizovan",
          "Prilagođen mobilnim uređajima",
          "Kompatibilan sa svim pregledačima",
          "Kontakt forme",
          "Osnovne animacije",
        ],
      },
      dynamic: {
        badge: "Najpopularnije",
        title: "Dinamički vebsajt",
        subtitle:
          "Interaktivni sajtovi sa naprednom funkcionalnošću i korisničkim iskustvima",
        period: "Jednokratna uplata",
        features: [
          "Sve iz statičkog",
          "React komponente",
          "Upravljanje dinamičkim sadržajem",
          "Autentifikacija korisnika",
          "API integracije",
          "Povezivanje sa bazom podataka",
          "Ažuriranje u realnom vremenu",
          "Interaktivni kontrolni paneli",
        ],
      },
      custom: {
        title: "Prilagođena rešenja",
        subtitle:
          "Full-stack aplikacije sa prilagođenim backend-om i naprednim funkcijama",
        period: "Na osnovu obima projekta",
        features: [
          "Sve iz dinamičkog",
          "Prilagođeni Python backend",
          "Razvoj RESTful API-ja",
          "Kompleksan dizajn baze podataka",
          "Integracije trećih strana",
          "Obrada plaćanja",
          "Administratorski paneli",
          "Cloud deploy",
          "Skalabilna arhitektura",
          "Kontinuirana podrška",
        ],
      },
      cta: {
        title: "Spremni da započnete svoj projekat?",
        subtitle: "Razgovarajmo o vašim zahtevima i ostvarimo vašu viziju",
        button: "Kontaktirajte me",
      },
    },
    modal: {
      title: "Hajde da radimo zajedno",
      subtitle: "Popunite formu ispod i javiću vam se u roku od 24 sata",
      nameLabel: "Vaše ime",
      emailLabel: "Email adresa",
      projectLabel: "Tip projekta",
      messageLabel: "Poruka",
      namePlaceholder: "Marko Marković",
      emailPlaceholder: "marko@primer.com",
      projectPlaceholder: "npr., Dinamički vebsajt, Prilagođeno rešenje",
      messagePlaceholder: "Recite mi o svom projektu...",
      submitButton: "Pošaljite poruku",
      contactMethods: ["Email", "LinkedIn", "GitHub"],
    },
    footer: {
      timezone: "CET",
      copyright: "Ivan Pavlović © 2025",
      contact: "Javite mi se na:",
    },
  },
};

function switchLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update active flag
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update navigation
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.dataset[lang]) {
      link.textContent = link.dataset[lang];
    }
  });

  // Update hero section
  document.querySelector(".text-container p").textContent = t.hero.description;

  // Update About section
  document.querySelector(".about-intro h2").textContent = t.about.title;
  document.querySelector(".about-intro p").textContent = t.about.intro;

  const valueCards = document.querySelectorAll(".value-card");
  valueCards[0].querySelector(".value-title").textContent = t.about.card1Title;
  valueCards[0].querySelector(".value-description").textContent =
    t.about.card1Desc;
  valueCards[1].querySelector(".value-title").textContent = t.about.card2Title;
  valueCards[1].querySelector(".value-description").textContent =
    t.about.card2Desc;
  valueCards[2].querySelector(".value-title").textContent = t.about.card3Title;
  valueCards[2].querySelector(".value-description").textContent =
    t.about.card3Desc;
  valueCards[3].querySelector(".value-title").textContent = t.about.card4Title;
  valueCards[3].querySelector(".value-description").textContent =
    t.about.card4Desc;

  // Update Education section
  document.querySelector(".education-header h2").textContent =
    t.education.title;
  document.querySelectorAll(".education-column h3")[0].textContent =
    t.education.educationLabel;
  document.querySelectorAll(".education-column h3")[1].textContent =
    t.education.experienceLabel;

  // Update education timeline items
  const educationItems = document.querySelectorAll(
    ".education-column:first-child .timeline-item"
  );
  educationItems.forEach((item, index) => {
    if (t.education.items[index]) {
      item.querySelector(".timeline-title").textContent =
        t.education.items[index].title;
      item.querySelector(".timeline-subtitle").textContent =
        t.education.items[index].subtitle;
      item.querySelector(".timeline-description").textContent =
        t.education.items[index].description;
    }
  });

  // Update experience timeline items
  const experienceItems = document.querySelectorAll(
    ".education-column:last-child .timeline-item"
  );
  experienceItems.forEach((item, index) => {
    const expIndex = index + 4; // Experience items start at index 4
    if (t.education.items[expIndex]) {
      item.querySelector(".timeline-title").textContent =
        t.education.items[expIndex].title;
      item.querySelector(".timeline-subtitle").textContent =
        t.education.items[expIndex].subtitle;
      item.querySelector(".timeline-description").textContent =
        t.education.items[expIndex].description;
    }
  });

  // Update Projects section
  document.querySelector(".projects-header h2").textContent = t.projects.title;

  // Update project titles
  const projectTitles = document.querySelectorAll(".project-title");
  projectTitles.forEach((title, index) => {
    if (t.projects.projectNames[index]) {
      title.textContent = t.projects.projectNames[index];
    }
  });

  // Update Pricing section
  document.querySelector(".pricing-header h2").textContent = t.pricing.title;

  const pricingCards = document.querySelectorAll(".pricing-card");

  // Static website
  pricingCards[0].querySelector(".pricing-title").textContent =
    t.pricing.static.title;
  pricingCards[0].querySelector(".pricing-subtitle").textContent =
    t.pricing.static.subtitle;
  pricingCards[0].querySelector(".pricing-period").textContent =
    t.pricing.static.period;
  const staticFeatures = pricingCards[0].querySelectorAll(
    ".pricing-features li"
  );
  t.pricing.static.features.forEach((feature, i) => {
    if (staticFeatures[i]) {
      staticFeatures[i].textContent = feature;
    }
  });

  // Dynamic website
  pricingCards[1].querySelector(".pricing-badge").textContent =
    t.pricing.dynamic.badge;
  pricingCards[1].querySelector(".pricing-title").textContent =
    t.pricing.dynamic.title;
  pricingCards[1].querySelector(".pricing-subtitle").textContent =
    t.pricing.dynamic.subtitle;
  pricingCards[1].querySelector(".pricing-period").textContent =
    t.pricing.dynamic.period;
  const dynamicFeatures = pricingCards[1].querySelectorAll(
    ".pricing-features li"
  );
  t.pricing.dynamic.features.forEach((feature, i) => {
    if (dynamicFeatures[i]) {
      dynamicFeatures[i].textContent = feature;
    }
  });

  // Custom solutions
  pricingCards[2].querySelector(".pricing-title").textContent =
    t.pricing.custom.title;
  pricingCards[2].querySelector(".pricing-subtitle").textContent =
    t.pricing.custom.subtitle;
  pricingCards[2].querySelector(".pricing-period").textContent =
    t.pricing.custom.period;
  const customFeatures = pricingCards[2].querySelectorAll(
    ".pricing-features li"
  );
  t.pricing.custom.features.forEach((feature, i) => {
    if (customFeatures[i]) {
      customFeatures[i].textContent = feature;
    }
  });

  // Update CTA section
  document.querySelector(".contact-section h3").textContent =
    t.pricing.cta.title;
  document.querySelector(".contact-section p").textContent =
    t.pricing.cta.subtitle;
  document.querySelector(".contact-button").textContent = t.pricing.cta.button;

  // Update Modal
  document.querySelector(".modal-header h3").textContent = t.modal.title;
  document.querySelector(".modal-header p").textContent = t.modal.subtitle;

  const formLabels = document.querySelectorAll(".form-group label");
  if (formLabels.length >= 4) {
    formLabels[0].textContent = t.modal.nameLabel;
    formLabels[1].textContent = t.modal.emailLabel;
    formLabels[2].textContent = t.modal.projectLabel;
    formLabels[3].textContent = t.modal.messageLabel;
  }

  const formInputs = document.querySelectorAll(".form-group input");
  if (formInputs.length >= 3) {
    formInputs[0].placeholder = t.modal.namePlaceholder;
    formInputs[1].placeholder = t.modal.emailPlaceholder;
    formInputs[2].placeholder = t.modal.projectPlaceholder;
  }

  const textarea = document.querySelector(".form-group textarea");
  if (textarea) {
    textarea.placeholder = t.modal.messagePlaceholder;
  }

  const submitButton = document.querySelector(".submit-button");
  if (submitButton) {
    submitButton.textContent = t.modal.submitButton;
  }

  // Update contact methods text
  const contactMethods = document.querySelectorAll(".contact-method span");
  contactMethods.forEach((method, index) => {
    if (t.modal.contactMethods[index]) {
      method.textContent = t.modal.contactMethods[index];
    }
  });

  // Update Footer
  document.querySelector(".timezone").textContent = t.footer.timezone;
  document.querySelector(".footer-title").textContent = t.footer.copyright;

  const footerContact = document.querySelector(".footer-contact");
  if (footerContact) {
    const emailLink = footerContact.querySelector("a");
    if (emailLink) {
      footerContact.innerHTML = `${t.footer.contact} <a href="mailto:ipdeveloper2001@gmail.com
">ipdeveloper2001@gmail.com
</a>`;
    }
  }

  // Restart typing animation with new language
  if (typingElement) {
    clearTimeout(typingTimeout); // zaustavi prethodno tipkanje
    currentText = "";
    isDeleting = false;
    currentIndex = 0;
    type();
  }

  // Save language preference
  localStorage.setItem("preferredLang", lang);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Clock function
function updateClock() {
  const now = new Date();
  const options = {
    timeZone: "Europe/Belgrade", // Changed to Belgrade as it's CET
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const timeString = now.toLocaleTimeString("en-GB", options);
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    clockElement.textContent = timeString;
  }
}

updateClock();
setInterval(updateClock, 1000);

const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Start typing animation
if (typingElement) {
  setTimeout(type, 1000);
}

// Contact Modal Functions
function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Close modal on outside click
const contactModal = document.getElementById("contactModal");
if (contactModal) {
  contactModal.addEventListener("click", (e) => {
    if (e.target.id === "contactModal") {
      closeContactModal();
    }
  });
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    project: formData.get("project"),
    message: formData.get("message"),
  };

  // Create mailto link with form data
  const subject = encodeURIComponent(`Project Inquiry: ${data.project}`);
  const body = encodeURIComponent(`Name: ${data.name}
Email: ${data.email}
Project Type: ${data.project}

Message:
${data.message}`);

  window.location.href = `mailto:ipdeveloper2001@gmail.com
?subject=${subject}&body=${body}`;

  // Close modal after a short delay
  setTimeout(() => {
    closeContactModal();
    event.target.reset();
  }, 500);
}

// Mobile menu toggle za manje ekrane
function initMobileMenu() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if (window.innerWidth <= 768) {
    if (!document.querySelector(".menu-toggle")) {
      const menuToggle = document.createElement("div");
      menuToggle.className = "menu-toggle";
      menuToggle.innerHTML = `
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      `;

      menuToggle.style.cssText = `
        display: none;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        padding: 8px;
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index: 100;
      `;

      menuToggle.querySelectorAll(".bar").forEach((bar) => {
        bar.style.cssText = `
          width: 25px;
          height: 3px;
          background: #1a1a1a;
          border-radius: 2px;
          transition: 0.3s;
        `;
      });

      header.style.position = "relative";
      header.appendChild(menuToggle);

      // Mobile menu styles
      nav.style.cssText = `
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100vh;
        background: white;
        flex-direction: column;
        padding: 5rem 2rem 2rem;
        transition: 0.3s;
        z-index: 99;
        box-shadow: 2px 0 10px rgba(0,0,0,0.1);
      `;

      nav.classList.add("mobile-nav");

      const closeBtn = document.createElement("div");
      closeBtn.className = "close-menu";
      closeBtn.innerHTML = "×";
      closeBtn.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
        color: #1a1a1a;
      `;

      nav.appendChild(closeBtn);

      // Toggle functions
      menuToggle.addEventListener("click", () => {
        nav.style.left = "0";
        document.body.style.overflow = "hidden";
      });

      closeBtn.addEventListener("click", () => {
        nav.style.left = "-100%";
        document.body.style.overflow = "";
      });

      // Close menu when clicking links
      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.style.left = "-100%";
          document.body.style.overflow = "";
        });
      });

      // Show/hide menu toggle based on screen size
      if (window.innerWidth <= 768) {
        menuToggle.style.display = "flex";
        nav.style.display = "flex";
      }
    }
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize mobile menu
  initMobileMenu();

  // Initialize language switcher with saved preference
  const savedLang = localStorage.getItem("preferredLang");
  if (savedLang && (savedLang === "en" || savedLang === "sr")) {
    switchLanguage(savedLang);
  } else {
    // Set default language to English
    switchLanguage("en");
  }

  // Update on resize
  window.addEventListener("resize", initMobileMenu);
});

// Add CSS for modal active state if not already in your CSS
const style = document.createElement("style");
style.textContent = `
.contact-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-modal.active {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  transform: translateY(-20px);
  transition: transform 0.3s ease;
}

.contact-modal.active .modal-content {
  transform: translateY(0);
}
`;

document.head.appendChild(style);

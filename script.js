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
let typingTimeout;
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

  typingTimeout = setTimeout(type, typeSpeed);
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
          title: "High School Diploma — Computer Technician",
          subtitle:
            "Secondary School of Electrical Engineering and Computer Science | Banja Luka, BiH",
          description:
            "Completed comprehensive education in computer science fundamentals, hardware, software, and networking. Developed practical skills in computer maintenance, programming basics, and IT systems.",
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
    certificates: {
      title: "Professional Certificates",
      items: {
        0: {
          title: "CS50x — HarvardX",
          description:
            "Comprehensive introduction to computer science covering C, Python, algorithms, data structures, SQL, web development, and system design.",
          tags: [
            "C Programming",
            "Python",
            "Algorithms",
            "Data Structures",
            "SQL",
          ],
        },
        1: {
          title: "CS50p — HarvardX",
          description:
            "Focused exclusively on Python programming, covering OOP, testing, exception handling, libraries, and real-world software development.",
          tags: ["Python", "OOP", "APIs", "Testing", "Libraries"],
        },
        2: {
          title: "Frontend Expert Certification",
          description:
            "Specialized training in modern frontend development including HTML, CSS, JavaScript, UI/UX principles, responsive design, and best practices.",
          tags: [
            "JavaScript",
            "CSS",
            "UI/UX",
            "Responsive Design",
            "Modern Web",
          ],
        },
      },
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's discuss your requirements and bring your vision to life",
      infoTitle: "Get in touch",
      infoText:
        "I'm available for freelance projects and full-time opportunities. Feel free to reach out if you want to collaborate!",
      formTitle: "Send me a message",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      projectLabel: "Project Type",
      messageLabel: "Message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      projectPlaceholder: "Select project type",
      messagePlaceholder: "Tell me about your project...",
      submitButton: "Send Message",
      contactMethods: {
        email: {
          title: "Email",
          subtitle: "ipdeveloper2001@gmail.com",
        },
        linkedin: {
          title: "LinkedIn",
          subtitle: "Connect with me",
        },
        github: {
          title: "GitHub",
          subtitle: "View my projects",
        },
      },
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
          title: "Srednja škola — Tehničar računarstva",
          subtitle:
            "Srednja elektrotehnička i računarska škola | Banja Luka, BiH",
          description:
            "Završio sam sveobuhvatno obrazovanje u osnovama računarstva, hardveru, softveru i mrežama. Razvio sam praktične veštine u održavanju računara, osnovama programiranja i IT sistemima.",
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
    certificates: {
      title: "Profesionalni sertifikati",
      items: {
        0: {
          title: "CS50x — HarvardX",
          description:
            "Sveobuhvatan uvod u računarstvo koji pokriva C, Python, algoritme, strukture podataka, SQL, web razvoj i dizajn sistema.",
          tags: [
            "C Programiranje",
            "Python",
            "Algoritmi",
            "Strukture podataka",
            "SQL",
          ],
        },
        1: {
          title: "CS50p — HarvardX",
          description:
            "Fokusiran isključivo na Python programiranje, pokriva OOP, testiranje, obradu izuzetaka, biblioteke i razvoj softvera u stvarnom svetu.",
          tags: ["Python", "OOP", "API-ji", "Testiranje", "Biblioteke"],
        },
        2: {
          title: "Frontend ekspert sertifikat",
          description:
            "Specijalizovana obuka u modernom frontend razvoju uključujući HTML, CSS, JavaScript, UI/UX principe, responzivni dizajn i najbolje prakse.",
          tags: [
            "JavaScript",
            "CSS",
            "UI/UX",
            "Responzivni dizajn",
            "Moderni web",
          ],
        },
      },
    },
    contact: {
      title: "Kontaktirajte me",
      subtitle: "Razgovarajmo o vašim zahtevima i ostvarimo vašu viziju",
      infoTitle: "Stupite u kontakt",
      infoText:
        "Dostupan sam za freelance projekte i full-time prilike. Slobodno me kontaktirajte ako želite da sarađujemo!",
      formTitle: "Pošaljite mi poruku",
      nameLabel: "Vaše ime",
      emailLabel: "Email adresa",
      projectLabel: "Tip projekta",
      messageLabel: "Poruka",
      namePlaceholder: "Marko Marković",
      emailPlaceholder: "marko@primer.com",
      projectPlaceholder: "Izaberite tip projekta",
      messagePlaceholder: "Recite mi o svom projektu...",
      submitButton: "Pošaljite poruku",
      contactMethods: {
        email: {
          title: "Email",
          subtitle: "ipdeveloper2001@gmail.com",
        },
        linkedin: {
          title: "LinkedIn",
          subtitle: "Povežite se sa mnom",
        },
        github: {
          title: "GitHub",
          subtitle: "Pogledajte moje projekte",
        },
      },
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

  // Update Certificates section
  document.querySelector(".certificates-header h2").textContent =
    t.certificates.title;

  const certificateCards = document.querySelectorAll(".certificate-card");
  certificateCards.forEach((card, index) => {
    if (t.certificates.items[index]) {
      const content = card.querySelector(".certificate-content");
      content.querySelector("h3").textContent =
        t.certificates.items[index].title;
      content.querySelector("p").textContent =
        t.certificates.items[index].description;

      const tagsContainer = content.querySelector(".certificate-tags");
      tagsContainer.innerHTML = "";
      t.certificates.items[index].tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.className = "cert-tag";
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
      });
    }
  });

  // Update Contact section
  document.querySelector(".contact-header h2").textContent = t.contact.title;
  document.querySelector(".contact-subtitle").textContent = t.contact.subtitle;

  const contactInfo = document.querySelector(".contact-info");
  contactInfo.querySelector("h3").textContent = t.contact.infoTitle;
  contactInfo.querySelector("p").textContent = t.contact.infoText;

  const contactForm = document.querySelector(".contact-form");
  contactForm.querySelector("h3").textContent = t.contact.formTitle;

  const formGroups = contactForm.querySelectorAll(".form-group");
  if (formGroups.length >= 4) {
    formGroups[0].querySelector("label").textContent = t.contact.nameLabel;
    formGroups[0].querySelector("input").placeholder =
      t.contact.namePlaceholder;

    formGroups[1].querySelector("label").textContent = t.contact.emailLabel;
    formGroups[1].querySelector("input").placeholder =
      t.contact.emailPlaceholder;

    formGroups[2].querySelector("label").textContent = t.contact.projectLabel;
    formGroups[2].querySelector("select option:first-child").textContent =
      t.contact.projectPlaceholder;

    formGroups[3].querySelector("label").textContent = t.contact.messageLabel;
    formGroups[3].querySelector("textarea").placeholder =
      t.contact.messagePlaceholder;
  }

  const submitButton = contactForm.querySelector(".submit-button");
  if (submitButton) {
    submitButton.textContent = t.contact.submitButton;
  }

  // Update contact methods
  const contactMethods = document.querySelectorAll(".contact-method");
  contactMethods.forEach((method, index) => {
    const methodData = Object.values(t.contact.contactMethods)[index];
    if (methodData) {
      method.querySelector("span").textContent = methodData.title;
      method.querySelector("small").textContent = methodData.subtitle;
    }
  });

  // Update Footer
  document.querySelector(".timezone").textContent = t.footer.timezone;
  document.querySelector(".footer-title").textContent = t.footer.copyright;

  const footerContact = document.querySelector(".footer-contact");
  if (footerContact) {
    const emailLink = footerContact.querySelector("a");
    if (emailLink) {
      footerContact.innerHTML = `${t.footer.contact} <a href="mailto:ipdeveloper2001@gmail.com">ipdeveloper2001@gmail.com</a>`;
    }
  }

  // Restart typing animation with new language
  if (typingElement) {
    clearTimeout(typingTimeout);
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

  // Reset form after a short delay
  setTimeout(() => {
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

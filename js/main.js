/* =========================================
   Translations & Core Logic
========================================= */
const translations = {
    es: {
        nav_home: "Inicio", nav_about: "Sobre Mí", nav_projects: "Proyectos", nav_contact: "Contacto",
        hero_greeting: "Hola, mi nombre es", hero_subtitle: "Construyo cosas para la web",
        hero_desc: "Soy <span class='highlight'>estudiante de 2º de DAW</span> (Desarrollo de Aplicaciones Web). Busco una oportunidad para <span class='highlight'>teletrabajar en remoto por las mañanas</span>. Aunque no tengo experiencia profesional previa, estoy enormemente motivado y dispuesto a <span class='highlight'>aprender todo lo que haga falta</span> para aportar valor a tu equipo.",
        hero_cta_projects: "Ver mis proyectos", hero_cta_contact: "Hablemos",
        about_heading: "Sobre Mí",
        about_p1: "¡Hola! Soy David. Mi pasión por la programación me llevó a estudiar Desarrollo de Aplicaciones Web (DAW), donde estoy construyendo una base sólida como desarrollador.",
        about_p2: "Me considero una persona proactiva, resolutiva y con muchas ganas de entrar al mundo laboral. Mi principal objetivo ahora mismo es encontrar una empresa que me permita crecer profesionalmente mientras demuestro mi compromiso y capacidad de aprendizaje rápido.",
        about_p_cyber: "Además, mi siguiente gran objetivo es cursar el <strong>Máster de Especialización en Ciberseguridad</strong>, ya que me apasiona la protección de datos y la creación de sistemas robustos y seguros.",
        about_p3: "Durante mis dos años en DAW, he adquirido conocimientos en todo el stack de desarrollo:",
        stat_1: "Formación Actual", stat_2: "Busco Remoto", stat_3: "Ganas de aprender",
        projects_heading: "Proyectos", projects_loading: "Cargando repositorios desde GitHub...",
        projects_view_all: "Ver todos mis proyectos en GitHub", projects_no_repos: "Aún no hay repositorios públicos.",
        projects_error: "Error al cargar los proyectos de GitHub. Por favor, inténtalo más tarde.",
        projects_no_desc: "Sin descripción disponible, pero seguro que es un proyecto genial. ¡Échale un vistazo en el repositorio!",
        contact_heading: "Contacto", contact_title: "Ponte en contacto",
        contact_desc: "Actualmente estoy buscando nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, ¡haré todo lo posible por responderte!",
        contact_whatsapp: "Chatear por WhatsApp", form_name: "Nombre", form_email: "Correo",
        form_error_at: "Falta el @", form_error_dot: "Esa dirección no es válida o falta el .com", form_sending: "Enviando...",
        footer_full: "Diseñado y construido por:<br>-David Domínguez Hinjos",
        footer_text: "Diseñado y construido con", footer_by: "por David",
        lang_btn: "ES", logo_subtext: "Estudiante 2º DAW (Actualidad)",
        hero_subtitle_1: "Construyo cosas para la web", hero_subtitle_2: "Especializado en Backend & Frontend", hero_subtitle_3: "Apasionado por la Ciberseguridad"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "Hi, my name is", hero_subtitle: "I build things for the web",
        hero_desc: "I am a <span class='highlight'>2nd-year Web Development student (DAW)</span>. I am looking for a <span class='highlight'>morning remote work</span> opportunity. Although I lack professional experience, I am highly motivated and willing to <span class='highlight'>learn whatever it takes</span> to add value to your team.",
        hero_cta_projects: "See my projects", hero_cta_contact: "Let's talk",
        about_heading: "About Me",
        about_p1: "Hello! I'm David. My passion for programming led me to study Web Application Development (DAW), where I'm building a solid foundation as a developer.",
        about_p2: "I consider myself a proactive, problem-solving person, eager to enter the professional world. My main goal right now is to find a company that allows me to grow professionally while I demonstrate my commitment and ability to learn quickly.",
        about_p_cyber: "Additionally, my next big goal is to pursue a <strong>Specialization Master's Degree in Cybersecurity</strong>, as I am deeply passionate about data protection and building secure systems.",
        about_p3: "During my two years in DAW, I have acquired knowledge across the full development stack:",
        stat_1: "Current Studies", stat_2: "Seeking Remote", stat_3: "Eager to learn",
        projects_heading: "Projects", projects_loading: "Loading repositories from GitHub...",
        projects_view_all: "View all my projects on GitHub", projects_no_repos: "No public repositories yet.",
        projects_error: "Error loading GitHub projects. Please try again later.",
        projects_no_desc: "No description available, but it's probably an awesome project.",
        contact_heading: "Contact", contact_title: "Get In Touch",
        contact_desc: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        contact_whatsapp: "Chat on WhatsApp", form_name: "Name", form_email: "Email",
        form_error_at: "Missing @", form_error_dot: "Invalid address or missing .com", form_sending: "Sending...",
        footer_full: "Designed and built by:<br>-David Domínguez Hinjos",
        footer_text: "Designed & Built with", footer_by: "by David",
        lang_btn: "EN", logo_subtext: "2nd Year Web Dev Student (Present)",
        hero_subtitle_1: "I build things for the web", hero_subtitle_2: "Specialized in Backend & Frontend", hero_subtitle_3: "Cybersecurity Enthusiast"
    },
    fr: {
        nav_home: "Accueil", nav_about: "À Propos", nav_projects: "Projets", nav_contact: "Contact",
        hero_greeting: "Salut, je m'appelle", hero_subtitle: "Je construis des choses pour le web",
        hero_desc: "Je suis un <span class='highlight'>étudiant en 2ème année de Web Dev (DAW)</span>. Je cherche une opportunité de <span class='highlight'>télétravail le matin</span>. Bien que je manque d'expérience professionnelle, je suis très motivé et prêt à <span class='highlight'>apprendre tout ce qu'il faut</span> pour apporter de la valeur à votre équipe.",
        hero_cta_projects: "Voir mes projets", hero_cta_contact: "Parlons-en",
        about_heading: "À Propos",
        about_p1: "Bonjour ! Je suis David. Ma passion pour la programmation m'a conduit à étudier le développement d'applications web (DAW), où je construis une base solide en tant que développeur.",
        about_p2: "Je me considère comme une personne proactive, résolvant des problèmes, désiruse d'entrer dans le monde professionnel.",
        about_p_cyber: "De plus, mon prochain grand objectif est de poursuivre un <strong>Master de Spécialisation en Cybersécurité</strong>.",
        about_p3: "Au cours de mes deux années à la DAW, j'ai acquis des connaissances sur l'ensemble de la pile de développement :",
        stat_1: "Formation Actuelle", stat_2: "Cherche Télétravail", stat_3: "Envie d'apprendre",
        projects_heading: "Projets", projects_loading: "Chargement des dépôts GitHub...",
        projects_view_all: "Voir tous mes projets sur GitHub", projects_no_repos: "Pas encore de dépôts publics.",
        projects_error: "Erreur lors du chargement des projets GitHub.",
        projects_no_desc: "Pas de description disponible, mais c'est sûrement un projet génial.",
        contact_heading: "Contact", contact_title: "Contactez-moi",
        contact_desc: "Je suis actuellement à la recherche de nouvelles opportunités.",
        contact_whatsapp: "Discuter sur WhatsApp", form_name: "Nom", form_email: "E-mail",
        form_error_at: "Le @ est manquant", form_error_dot: "Adresse invalide ou .com manquant", form_sending: "Envoi en cours...",
        footer_full: "Conçu et construit par:<br>-David Domínguez Hinjos",
        footer_text: "Conçu et construit avec", footer_by: "par David",
        lang_btn: "FR", logo_subtext: "Étudiant 2ème DAW (Présent)",
        hero_subtitle_1: "Je construis des choses pour le web", hero_subtitle_2: "Spécialisé en Backend & Frontend", hero_subtitle_3: "Passionné de Cybersécurité"
    },
    de: {
        nav_home: "Startseite", nav_about: "Über mich", nav_projects: "Projekte", nav_contact: "Kontakt",
        hero_greeting: "Hallo, mein Name ist", hero_subtitle: "Ich baue Dinge für das Web",
        hero_desc: "Ich bin <span class='highlight'>Web-Entwicklungsstudent im 2. Jahr (DAW)</span>. Ich suche eine <span class='highlight'>Remote-Arbeitsmöglichkeit am Morgen</span>.",
        hero_cta_projects: "Projekte ansehen", hero_cta_contact: "Kontakt",
        about_heading: "Über mich",
        about_p1: "Hallo! Ich bin David. Meine Leidenschaft für das Programmieren hat mich zum Studium der Web-Anwendungsentwicklung (DAW) geführt.",
        about_p2: "Ich sehe mich als proaktive Person, die bereit ist, in die Berufswelt einzusteigen.",
        about_p_cyber: "Mein nächstes großes Ziel ist ein <strong>Master in Cybersicherheit</strong>.",
        about_p3: "In den zwei Jahren bei DAW habe ich Kenntnisse im gesamten Stack erworben:",
        stat_1: "Aktuelle Ausbildung", stat_2: "Suche Remote-Arbeit", stat_3: "Lernbereitschaft",
        projects_heading: "Projekte", projects_loading: "Lade GitHub-Projekte...",
        projects_view_all: "Alle Projekte auf GitHub ansehen", projects_no_repos: "Noch keine öffentlichen Repositories.",
        projects_error: "Fehler beim Laden der GitHub-Projekte.",
        projects_no_desc: "Keine Beschreibung verfügbar, aber es ist sicher ein tolles Projekt.",
        contact_heading: "Kontakt", contact_title: "Kontakt aufnehmen",
        contact_desc: "Ich suche derzeit nach neuen Möglichkeiten.",
        contact_whatsapp: "WhatsApp Chat", form_name: "Name", form_email: "E-Mail",
        form_error_at: "Das @ fehlt", form_error_dot: "Ungültige Adresse oder .com fehlt", form_sending: "Wird gesendet...",
        footer_full: "Entworfen und gebaut von:<br>-David Domínguez Hinjos",
        footer_text: "Entworfen und gebaut mit", footer_by: "von David",
        lang_btn: "DE", logo_subtext: "Student 2. DAW (Gegenwart)",
        hero_subtitle_1: "Ich baue Dinge für das Web", hero_subtitle_2: "Spezialisiert auf Backend & Frontend", hero_subtitle_3: "Cybersicherheits-Enthusiast"
    },
    it: {
        nav_home: "Home", nav_about: "Su di me", nav_projects: "Progetti", nav_contact: "Contatto",
        hero_greeting: "Ciao, mi chiamo", hero_subtitle: "Costruisco cose per il web",
        hero_desc: "Sono uno <span class='highlight'>studente del 2° anno di Web Dev (DAW)</span>. Cerco un'opportunità di <span class='highlight'>lavoro remoto al mattino</span>.",
        hero_cta_projects: "Vedi i miei progetti", hero_cta_contact: "Parliamo",
        about_heading: "Su di me",
        about_p1: "Ciao! Sono David. La mia passione per la programmazione mi ha portato a studiare lo sviluppo di applicazioni web (DAW).",
        about_p2: "Mi considero una persona proattiva, pronta ad entrare nel mondo del lavoro.",
        about_p_cyber: "Il mio prossimo grande obiettivo è un <strong>Master in Cybersicurezza</strong>.",
        about_p3: "Durante i miei due anni alla DAW, ho acquisito conoscenze in tutto lo stack di sviluppo:",
        stat_1: "Formazione Attuale", stat_2: "Cerco Lavoro Remoto", stat_3: "Voglia di imparare",
        projects_heading: "Progetti", projects_loading: "Caricamento progetti GitHub...",
        projects_view_all: "Vedi tutti i progetti su GitHub", projects_no_repos: "Nessun repository pubblico ancora.",
        projects_error: "Errore nel caricamento dei progetti GitHub.",
        projects_no_desc: "Nessuna descrizione disponibile, ma sarà sicuramente un ottimo progetto.",
        contact_heading: "Contatto", contact_title: "Mettiti in contatto",
        contact_desc: "Attualmente sto cercando nuove opportunità.",
        contact_whatsapp: "Chatta su WhatsApp", form_name: "Nome", form_email: "E-mail",
        form_error_at: "Manca la @", form_error_dot: "Indirizzo non valido o manca il .com", form_sending: "Invio in corso...",
        footer_full: "Progettato e costruito da:<br>-David Domínguez Hinjos",
        footer_text: "Progettato e construido con", footer_by: "da David",
        lang_btn: "IT", logo_subtext: "Studente 2° DAW (Presente)",
        hero_subtitle_1: "Costruisco cose per il web", hero_subtitle_2: "Specializzato in Backend & Frontend", hero_subtitle_3: "Appassionato di Cybersicurezza"
    },
    pt: {
        nav_home: "Início", nav_about: "Sobre mim", nav_projects: "Projetos", nav_contact: "Contacto",
        hero_greeting: "Olá, o meu nome é", hero_subtitle: "Eu construo coisas para a web",
        hero_desc: "Sou um <span class='highlight'>estudante de 2º ano de Web Dev (DAW)</span>. Procuro uma oportunidade de <span class='highlight'>trabalho remoto de manhã</span>.",
        hero_cta_projects: "Ver os meus projetos", hero_cta_contact: "Vamos conversar",
        about_heading: "Sobre mim",
        about_p1: "Olá! Eu sou o David. A minha paixão pela programação levou-me a estudar o desenvolvimento de aplicações web (DAW).",
        about_p2: "Considero-me uma persona proativa, pronta para entrar no mundo profissional.",
        about_p_cyber: "O meu próximo grande objetivo é um <strong>Mestrado em Cibersegurança</strong>.",
        about_p3: "Durante os meus dois años na DAW, adquiri conhecimentos em todo o stack de desenvolvimento:",
        stat_1: "Formação Atual", stat_2: "Procuro Remoto", stat_3: "Vontade de aprender",
        projects_heading: "Projetos", projects_loading: "A carregar projetos do GitHub...",
        projects_view_all: "Ver todos os projetos no GitHub", projects_no_repos: "Ainda não existem repositórios públicos.",
        projects_error: "Erro ao carregar projetos do GitHub.",
        projects_no_desc: "Sem descrição disponível, mas deve ser um projeto fantástico.",
        contact_heading: "Contacto", contact_title: "Entrar em contacto",
        contact_desc: "Atualmente estou à procura de novas oportunidades.",
        contact_whatsapp: "Conversar no WhatsApp", form_name: "Nome", form_email: "E-mail",
        form_error_at: "Falta o @", form_error_dot: "Endereço inválido ou falta o .com", form_sending: "Enviando...",
        footer_full: "Projetado e construído por:<br>-David Domínguez Hinjos",
        footer_text: "Desenhado e construído com", footer_by: "por David",
        lang_btn: "PT", logo_subtext: "Estudante 2º DAW (Presente)",
        hero_subtitle_1: "Eu construo coisas para a web", hero_subtitle_2: "Especializado em Backend & Frontend", hero_subtitle_3: "Entusiasta de Cibersegurança"
    }
};

// Custom Repository Translations
const repoTranslations = {
    "Portfolio-Personal": {
        es: "Portfolio Personal Premium",
        en: "Premium Personal Portfolio",
        fr: "Portfolio Personnel Premium",
        de: "Premium Persönliches Portfolio",
        it: "Portfolio Personale Premium",
        pt: "Portfólio Pessoal Premium"
    },
    "Calculadora-Raciones": {
        es: "Calculadora de Raciones",
        en: "Portion Calculator",
        fr: "Calculateur de Portions",
        de: "Portionsrechner",
        it: "Calcolatore di Porzioni",
        pt: "Calculadora de Porções"
    },
    "info-personal": {
        es: "Información Personal",
        en: "Personal Information",
        fr: "Informations Personnelles",
        de: "Persönliche Informationen",
        it: "Informazioni Personali",
        pt: "Informações Pessoais"
    }
};

// Global variables
let currentLang = localStorage.getItem('portfolio-lang') || 'es';
const githubUsername = 'ddominguezh04';

/* =========================================
   UI Update Functions
========================================= */
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const currentLangText = document.getElementById('current-lang');
    if (currentLangText) currentLangText.textContent = lang.toUpperCase();

    const langDropdown = document.getElementById('lang-dropdown');
    if (langDropdown) {
        langDropdown.querySelectorAll('li').forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('data-lang') === lang) li.classList.add('active');
        });
    }

    fetchGitHubProjects();
}

function fetchGitHubProjects() {
    const container = document.getElementById('github-projects');
    if (!container) return;

    const t = translations[currentLang];
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--primary);"><i class="fas fa-spinner fa-spin"></i> ${t.projects_loading}</p>`;

    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=6`)
        .then(res => res.json())
        .then(repos => {
            container.innerHTML = '';
            if (!repos || repos.length === 0) {
                container.innerHTML = `<p>${t.projects_no_repos}</p>`;
                return;
            }
            repos.forEach((repo, index) => {
                const isInfoPersonal = repo.name.toLowerCase() === 'info-personal';

                const card = document.createElement('div');
                card.className = 'project-card glass-panel';
                card.style.animationDelay = `${index * 100}ms`;

                const techList = repo.language ? `<li>${repo.language}</li>` : '<li>Web</li>';

                const linksHtml = isInfoPersonal ? '' : `
                    <div class="project-links" style="display: flex; gap: 15px; font-size: 1.3rem;">
                        <a href="${repo.html_url}" target="_blank"><i class="fab fa-github"></i></a>
                        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                `;

                const repoTitle = (repoTranslations[repo.name] && repoTranslations[repo.name][currentLang]) || repo.name;
                const repoDesc = (repoTranslations[repo.name + "_desc"] && repoTranslations[repo.name + "_desc"][currentLang]) || repo.description || t.projects_no_desc;

                card.innerHTML = `
                    <div class="project-info" style="display: flex; flex-direction: column; height: 100%;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <i class="far fa-folder" style="font-size: 2.5rem; color: var(--primary);"></i>
                            ${linksHtml}
                        </div>
                        <h3 class="project-title" style="margin-bottom: 10px;">${repoTitle}</h3>
                        <p class="project-desc" style="flex-grow: 1;">${repoDesc}</p>
                        <ul class="project-tech" style="display: flex; gap: 15px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-top: 20px; list-style: none;">
                            ${techList}
                        </ul>
                    </div>
                `;
                container.appendChild(card);
            });
        }).catch(err => {
            container.innerHTML = `<p>${t.projects_error}</p>`;
        });
}

/* =========================================
   Animation Logic
========================================= */
let typingIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeAnimation() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const phrases = [
        translations[currentLang].hero_subtitle_1,
        translations[currentLang].hero_subtitle_2,
        translations[currentLang].hero_subtitle_3
    ].filter(p => p);

    const currentPhrase = phrases[typingIdx % phrases.length] || "";

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIdx);
        charIdx--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIdx + 1);
        charIdx++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIdx === currentPhrase.length) {
        isDeleting = true;
        delay = 2000;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        typingIdx++;
        delay = 500;
    }

    setTimeout(typeAnimation, delay);
}

/* =========================================
   Event Listeners (Run on Load)
========================================= */
function init() {
    // Reveal everything
    document.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.show').forEach(el => el.classList.remove('show'));

    // Counter Animation for stats
    const startCounters = () => {
        const counters = document.querySelectorAll('.stat-num[data-target]');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const updateCount = () => {
                const inc = target / 100;
                if (count < target) {
                    count += inc;
                    counter.innerText = Math.ceil(count) + '%';
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + '%';
                }
            };
            updateCount();
        });
    };

    // Accordions
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const section = header.closest('.accordion-section');
            if (section) {
                const isActive = section.classList.contains('active');
                section.classList.toggle('active');

                // If opening About section, start counters
                if (!isActive && section.id === 'about') {
                    setTimeout(startCounters, 500);
                }
            }
        });
    });

    // Lang toggle
    const langBtn = document.getElementById('lang-btn');
    const langSelector = document.querySelector('.lang-selector');
    if (langBtn && langSelector) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
        });
        document.addEventListener('click', () => langSelector.classList.remove('active'));
    }

    const langOptions = document.querySelectorAll('#lang-dropdown li');
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            setLanguage(opt.getAttribute('data-lang'));
        });
    });

    // Start systems
    setLanguage(currentLang);
    setTimeout(typeAnimation, 1000);

    // Navbar scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }
    });

    // Form Submission (AJAX)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const t = translations[currentLang];

            // Custom Validation
            if (!email.includes('@')) {
                formStatus.setAttribute('data-i18n', 'form_error_at');
                formStatus.textContent = t.form_error_at;
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
                return;
            }

            if (!email.includes('.') || email.split('.').pop().length < 2) {
                formStatus.setAttribute('data-i18n', 'form_error_dot');
                formStatus.textContent = t.form_error_dot;
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
                return;
            }

            formStatus.setAttribute('data-i18n', 'form_sending');
            formStatus.textContent = t.form_sending;
            formStatus.className = 'form-status';
            formStatus.style.display = 'block';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.setAttribute('data-i18n', 'form_success');
                    formStatus.textContent = t.form_success || "Mensaje enviado";
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    throw new Error();
                }
            } catch (error) {
                formStatus.setAttribute('data-i18n', 'form_error');
                formStatus.textContent = t.form_error || "Mensaje no enviado";
                formStatus.className = 'form-status error';
            }
        });
    }
}

// Start everything
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       Translations Dictionary
    ========================================= */
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_about: "Sobre Mí",
            nav_projects: "Proyectos",
            nav_contact: "Contacto",
            hero_greeting: "Hola, mi nombre es",
            hero_subtitle: "Construyo cosas para la web",
            hero_desc: "Soy <span class='highlight'>estudiante de 2º de DAW</span> (Desarrollo de Aplicaciones Web). Busco una oportunidad para <span class='highlight'>teletrabajar en remoto por las mañanas</span>. Aunque no tengo experiencia profesional previa, estoy enormemente motivado y dispuesto a <span class='highlight'>aprender todo lo que haga falta</span> para aportar valor a tu equipo.",
            hero_cta_projects: "Ver mis proyectos",
            hero_cta_contact: "Hablemos",
            about_heading: "Sobre Mí",
            about_p1: "¡Hola! Soy David. Mi pasión por la programación me llevó a estudiar Desarrollo de Aplicaciones Web (DAW), donde estoy construyendo una base sólida como desarrollador.",
            about_p2: "Me considero una persona proactiva, resolutiva y con muchas ganas de entrar al mundo laboral. Mi principal objetivo ahora mismo es encontrar una empresa que me permita crecer profesionalmente mientras demuestro mi compromiso y capacidad de aprendizaje rápido.",
            about_p_cyber: "Además, mi siguiente gran objetivo es cursar el <strong>Máster de Especialización en Ciberseguridad</strong>, ya que me apasiona la protección de datos y la creación de sistemas robustos y seguros.",
            about_p3: "Durante mis dos años en DAW, he adquirido conocimientos en todo el stack de desarrollo:",
            skill_1: "Java (POO & Backend)",
            skill_2: "PHP & Laravel",
            skill_3: "JavaScript & TypeScript",
            skill_4: "React & Angular",
            skill_7: "Bases de Datos (SQL / MySQL)",
            skill_8: "Git & Despliegue Web",
            stat_1: "Formación Actual",
            stat_2: "Busco Remoto",
            stat_3: "Ganas de aprender",
            projects_heading: "Cosas que he construido",
            projects_loading: "Cargando repositorios desde GitHub...",
            projects_view_all: "Ver todos mis proyectos en GitHub",
            projects_no_repos: "Aún no hay repositorios públicos.",
            projects_error: "Error al cargar los proyectos de GitHub. Por favor, inténtalo más tarde.",
            projects_no_desc: "Sin descripción disponible, pero seguro que es un proyecto genial. ¡Échale un vistazo en el repositorio!",
            contact_heading: "¿Qué sigue?",
            contact_title: "Ponte en contacto",
            contact_desc: "Actualmente estoy buscando nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, ¡haré todo lo posible por responderte!",
            contact_whatsapp: "Chatear por WhatsApp",
            form_name: "Nombre",
            form_email: "Correo",
            form_message: "Mensaje",
            form_submit: "Enviar Mensaje",
            form_success: "¡Enviado con éxito!",
            form_error: "Hubo un error. Por favor, inténtalo de nuevo.",
            footer_text: "Diseñado y construido con",
            footer_by: "por David",
            lang_btn: "EN"
        },
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_greeting: "Hi, my name is",
            hero_subtitle: "I build things for the web",
            hero_desc: "I am a <span class='highlight'>2nd-year Web Development student (DAW)</span>. I am looking for a <span class='highlight'>morning remote work</span> opportunity. Although I lack professional experience, I am highly motivated and willing to <span class='highlight'>learn whatever it takes</span> to add value to your team.",
            hero_cta_projects: "See my projects",
            hero_cta_contact: "Let's talk",
            about_heading: "About Me",
            about_p1: "Hello! I'm David. My passion for programming led me to study Web Application Development (DAW), where I'm building a solid foundation as a developer.",
            about_p2: "I consider myself a proactive, problem-solving person, eager to enter the professional world. My main goal right now is to find a company that allows me to grow professionally while I demonstrate my commitment and ability to learn quickly.",
            about_p_cyber: "Additionally, my next big goal is to pursue a <strong>Specialization Master's Degree in Cybersecurity</strong>, as I am deeply passionate about data protection and building robust, secure systems.",
            about_p3: "During my two years in DAW, I have acquired knowledge across the full development stack:",
            skill_1: "Java (OOP & Backend)",
            skill_2: "PHP & Laravel",
            skill_3: "JavaScript & TypeScript",
            skill_4: "React & Angular",
            skill_7: "Databases (SQL / MySQL)",
            skill_8: "Git & Web Deployment",
            stat_1: "Current Studies",
            stat_2: "Seeking Remote",
            stat_3: "Eager to learn",
            projects_heading: "Some Things I've Built",
            projects_loading: "Loading repositories from GitHub...",
            projects_view_all: "View all my projects on GitHub",
            projects_no_repos: "No public repositories yet.",
            projects_error: "Error loading GitHub projects. Please try again later.",
            projects_no_desc: "No description available, but it's probably an awesome project. Check it out on the repository!",
            contact_heading: "What's Next?",
            contact_title: "Get In Touch",
            contact_desc: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            contact_whatsapp: "Chat on WhatsApp",
            form_name: "Name",
            form_email: "Email",
            form_message: "Message",
            form_submit: "Send Message",
            form_success: "Sent successfully!",
            form_error: "There was an error. Please try again.",
            footer_text: "Designed & Built with",
            footer_by: "by David",
            lang_btn: "ES"
        }
    };

    /* =========================================
       Language Toggle Logic
    ========================================= */
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('portfolio-lang') || 'es';

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);
        
        // Update texts based on data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update Button Text
        langBtn.textContent = translations[lang].lang_btn;

        // Update form placeholders (to match labels)
        document.getElementById('name').placeholder = "Tu Nombre"; // Kept hidden by css but good for a11y
        
        // Force refresh GitHub projects if they are already loaded
        fetchGitHubProjects();
    };

    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    /* =========================================
       Mobile Menu Toggle
    ========================================= */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    const toggleMobileMenu = () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if(navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    /* =========================================
       Navigation Scrolled State
    ========================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       Active Navigation Link Update on Scroll
    ========================================= */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    /* =========================================
       Scroll Reveal Animations (Intersection Observer)
    ========================================= */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .hidden');
        heroElements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 200}ms`;
            el.classList.add('show');
        });
    }, 100);

    /* =========================================
       GitHub Dynamic Projects Fetch
    ========================================= */
    const githubUsername = 'ddominguezh04';
    const projectsContainer = document.getElementById('github-projects');
    const projectsMore = document.querySelector('.projects-more');

    const fetchGitHubProjects = () => {
        if (!projectsContainer) return;

        projectsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--primary);"><i class="fas fa-spinner fa-spin" style="margin-right: 10px;"></i> <span data-i18n="projects_loading">${translations[currentLang].projects_loading}</span></p>`;

        // Fetching more to sort them manually for "featured"
        fetch(`https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=12`)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(repos => {
                projectsContainer.innerHTML = ''; 

                if (repos.length === 0) {
                    projectsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">${translations[currentLang].projects_no_repos}</p>`;
                    return;
                }

                // Sort by stars (featured) then by date
                const featuredRepos = repos.sort((a, b) => {
                    if (b.stargazers_count !== a.stargazers_count) {
                        return b.stargazers_count - a.stargazers_count;
                    }
                    return new Date(b.pushed_at) - new Date(a.pushed_at);
                }).slice(0, 6);

                featuredRepos.forEach((repo, index) => {
                    const tech = repo.language ? `<li>${repo.language}</li>` : '<li>Variado</li>';
                    const description = repo.description || translations[currentLang].projects_no_desc;
                    const homepageLink = repo.homepage ? `<a href="${repo.homepage}" target="_blank" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : '';

                    const card = document.createElement('div');
                    card.className = 'project-card glass-panel hidden project-tilt';
                    card.style.transitionDelay = `${index * 150}ms`;

                    card.innerHTML = `
                        <div class="project-info" style="min-height: 250px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                                <i class="far fa-folder-open" style="font-size: 2.5rem; color: var(--primary);"></i>
                                <div class="project-links" style="display: flex; gap: 15px;">
                                    <a href="${repo.html_url}" target="_blank" aria-label="GitHub Repository">
                                        <i class="fab fa-github" style="font-size: 1.5rem; color: var(--text-main); transition: var(--transition);"></i>
                                    </a>
                                    ${homepageLink}
                                </div>
                            </div>
                            <h3 class="project-title" style="font-size: 1.3rem; margin-bottom: 15px;">${repo.name}</h3>
                            <p class="project-desc" style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; flex: 1;">${description}</p>
                            <ul class="project-tech" style="display: flex; flex-wrap: wrap; gap: 15px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
                                ${tech}
                            </ul>
                        </div>
                    `;

                    projectsContainer.appendChild(card);
                    observer.observe(card);
                });

                // Show "View More" button after loading
                if (projectsMore) {
                    projectsMore.classList.remove('hidden');
                    projectsMore.classList.add('show');
                }
            })
            .catch(error => {
                console.error('Error fetching GitHub repos:', error);
                projectsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ef4444;">${translations[currentLang].projects_error}</p>`;
            });
    };

    // Initialize translations and trigger first fetch
    setLanguage(currentLang);

    /* =========================================
       Custom Cursor Logic
    ========================================= */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // cursorOutline.style.left = `${posX}px`;
            // cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });

            cursorDot.classList.add('visible');
            cursorOutline.classList.add('visible');
        });

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
        });
    }

    /* =========================================
       AJAX Contact Form Submission
    ========================================= */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    formStatus.textContent = translations[currentLang].form_success;
                    formStatus.className = 'form-status success';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Response not ok');
                }
            } catch (error) {
                formStatus.textContent = translations[currentLang].form_error;
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                // Hide status after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        });
    }
});

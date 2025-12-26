// Traducciones
        const translations = {
            es: {
                title: "Mis Proyectos",
                back: "Volver",
                footer: "Todos los derechos reservados",
                "project1-title": "Blog Personal",
                "project1-desc": "Plataforma de blog personal con sistema de gestión de contenido, categorías, comentarios y panel de administración. Diseño responsive y optimizado para SEO.",
                "project2-title": "Sistema de Información Geográfica (SIG)",
                "project2-desc": "Aplicación web para visualización y análisis de datos geoespaciales. Incluye mapas interactivos, capas personalizables y herramientas de análisis espacial.",
                "project3-title": "SIL - Parroquia San Isidro Labrador",
                "project3-desc": "Sitio web oficial para la parroquia con calendario de eventos, galería de fotos, información de servicios religiosos y sistema de donaciones en línea.",
                "project4-title": "Portfolio Profesional",
                "project4-desc": "Portfolio personal interactivo y responsive que muestra proyectos, habilidades y experiencia profesional. Incluye animaciones suaves y diseño moderno.",
                "project5-title": "Sistema de Reservas para Restaurantes",
                "project5-desc": "Simulador completo de sistema de reservas con gestión de mesas, horarios, clientes y estadísticas. Incluye panel de administración y vista para clientes. (3 versiones disponibles)",
                "project6-title": "Lector de Placas Vehiculares",
                "project6-desc": "Sistema de reconocimiento automático de placas vehiculares utilizando visión por computadora. Ideal para control de acceso y estacionamientos.",
                "project7-title": "Plataforma de Apuestas en Línea y en Vivo",
                "project7-desc": "Sistema de apuestas deportivas con actualizaciones en tiempo real, gestión de usuarios, transacciones seguras y panel de administración completo.",
                "project8-title": "Diccionario Inglés-Español Interactivo",
                "project8-desc": "Aplicación de diccionario bilingüe con búsqueda avanzada, pronunciación de audio, ejemplos de uso y función de favoritos para traductores profesionales.",
                "project9-title": "Plataforma de Cursos Interactivos",
                "project9-desc": "Sistema de e-learning personalizable con cursos sobre máquinas virtuales, servidores, algoritmos y lenguajes de programación. Incluye ejercicios prácticos y evaluaciones.",
                "project10-title": "Foro de Discusión Comunitario",
                "project10-desc": "Plataforma de foro con categorías, hilos de discusión, sistema de moderación, perfiles de usuario y notificaciones en tiempo real para intercambio de ideas."
            },
            en: {
                title: "My Projects",
                back: "Back",
                footer: "All rights reserved",
                "project1-title": "Personal Blog",
                "project1-desc": "Personal blog platform with content management system, categories, comments, and admin panel. Responsive design and SEO optimized.",
                "project2-title": "Geographic Information System (GIS)",
                "project2-desc": "Web application for visualization and analysis of geospatial data. Includes interactive maps, customizable layers, and spatial analysis tools.",
                "project3-title": "SIL - San Isidro Labrador Parish",
                "project3-desc": "Official parish website with event calendar, photo gallery, religious services information, and online donation system.",
                "project4-title": "Professional Portfolio",
                "project4-desc": "Interactive and responsive personal portfolio showcasing projects, skills, and professional experience. Features smooth animations and modern design.",
                "project5-title": "Restaurant Reservation System",
                "project5-desc": "Complete reservation system simulator with table management, schedules, customer data, and statistics. Includes admin panel and customer view. (3 versions available)",
                "project6-title": "Vehicle License Plate Reader",
                "project6-desc": "Automatic license plate recognition system using computer vision. Ideal for access control and parking management.",
                "project7-title": "Online and Live Betting Platform",
                "project7-desc": "Sports betting system with real-time updates, user management, secure transactions, and complete administration panel.",
                "project8-title": "Interactive English-Spanish Dictionary",
                "project8-desc": "Bilingual dictionary application with advanced search, audio pronunciation, usage examples, and favorites feature for professional translators.",
                "project9-title": "Interactive Course Platform",
                "project9-desc": "Customizable e-learning system with courses on virtual machines, servers, algorithms, and programming languages. Includes hands-on exercises and assessments.",
                "project10-title": "Community Discussion Forum",
                "project10-desc": "Forum platform with categories, discussion threads, moderation system, user profiles, and real-time notifications for idea exchange."
            }
        };

        // Función para cambiar idioma
        function changeLanguage(lang) {
            // Guardar preferencia en localStorage
            localStorage.setItem('preferredLanguage', lang);
            
            // Actualizar botones activos
            document.getElementById('btn-es').classList.remove('active');
            document.getElementById('btn-en').classList.remove('active');
            document.getElementById('btn-' + lang).classList.add('active');
            
            // Actualizar textos
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            
            // Actualizar atributo lang del HTML
            document.documentElement.lang = lang;
        }

        // Detectar idioma del navegador al cargar
        window.addEventListener('DOMContentLoaded', function() {
            // Primero verificar si hay una preferencia guardada
            const savedLang = localStorage.getItem('preferredLanguage');
            
            if (savedLang) {
                changeLanguage(savedLang);
            } else {
                // Detectar idioma del navegador
                const browserLang = navigator.language || navigator.userLanguage;
                const lang = browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
                changeLanguage(lang);
            }
        });
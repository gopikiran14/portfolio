/**
 * MAIN UI & INTERACTIVE APPLICATION ENGINE
 * Renders data dynamically, handles 3D tilt, case studies, modals, themes, and interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initThemeManager();
  initAudioControls();
  initClock();
  initMetrics();
  initSkills();
  initProjects();
  initExperienceTimeline();
  initEducationAndCertifications();
  initContactForm();
  initCopyButtons();
  initModals();
  initScrollSpyAndNav();
  initCardTilt();
  initScrollReveal();
  initFooterYear();
});

// ==========================================
// 1. TYPEWRITER HERO ROLE CYCLER
// ==========================================
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  const prefixEl = document.getElementById('typewriter-prefix');
  if (!el) return;

  const roles = PORTFOLIO_DATA.personal.roles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function updatePrefix(role) {
    if (!prefixEl) return;
    const article = /^[AEIOUaeiou]/.test(role) ? 'an' : 'a';
    prefixEl.textContent = `I am ${article}`;
  }

  // Set initial prefix
  updatePrefix(roles[0]);

  function type() {
    const currentRole = roles[roleIdx];

    if (!isDeleting && charIdx === 0) {
      updatePrefix(currentRole);
    }

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      updatePrefix(roles[roleIdx]);
      typingSpeed = 400; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ==========================================
// 2. THEME MANAGER
// ==========================================
function initThemeManager() {
  const themeSelect = document.getElementById('theme-select');
  const savedTheme = localStorage.getItem('portfolio_theme') || 'cosmic';

  window.setTheme = function (themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('portfolio_theme', themeName);
    if (themeSelect) themeSelect.value = themeName;
    updateFaviconForTheme(themeName);
    if (window.soundEngine) window.soundEngine.playPop();
  };

  window.setTheme(savedTheme);

  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      window.setTheme(e.target.value);
    });
  }
}

function updateFaviconForTheme(themeName) {
  const themeGradients = {
    cosmic: { c1: '#8b5cf6', c2: '#00f2fe' },
    cyber:  { c1: '#ff007a', c2: '#00f0ff' },
    matrix: { c1: '#00ff88', c2: '#00b4d8' },
    light:  { c1: '#4f46e5', c2: '#7c3aed' }
  };
  const colors = themeGradients[themeName] || themeGradients.cosmic;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${colors.c1}"/>
        <stop offset="100%" stop-color="${colors.c2}"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="92" rx="26" ry="26" fill="url(#favGrad)"/>
    <rect x="5.5" y="5.5" width="89" height="89" rx="24.5" ry="24.5" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
    <g fill="none" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 45 33 C 41 24.5 33.5 22.5 26 22.5 C 15.5 22.5 11 31.5 11 50 C 11 68.5 15.5 77.5 26 77.5 C 36 77.5 44 70 45 52 L 28 52"/>
      <path d="M 87 34 C 83.5 25 76.5 22.5 67 22.5 C 57 22.5 53 28.5 53 36.5 C 53 49 87 45.5 87 64 C 87 73.5 80 77.5 68 77.5 C 58 77.5 53 72.5 49 64.5"/>
    </g>
    <circle cx="86" cy="23" r="3.2" fill="#FFFFFF"/>
  </svg>`;

  const faviconUrl = 'data:image/svg+xml,' + encodeURIComponent(svg);
  const links = document.querySelectorAll("link[rel*='icon']");
  links.forEach(l => {
    l.href = faviconUrl;
  });
}

// ==========================================
// 3. AUDIO CONTROLS
// ==========================================
function initAudioControls() {
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (!audioBtn) return;

  function updateAudioIcon() {
    const muted = window.soundEngine.isMuted();
    audioBtn.innerHTML = muted 
      ? '<i class="fas fa-volume-xmark"></i> <span class="nav-btn-text">Muted</span>' 
      : '<i class="fas fa-volume-high"></i> <span class="nav-btn-text">Sound ON</span>';
    audioBtn.classList.toggle('active', !muted);
  }

  updateAudioIcon();

  audioBtn.addEventListener('click', () => {
    window.soundEngine.toggleMute();
    updateAudioIcon();
    if (!window.soundEngine.isMuted()) {
      window.soundEngine.playSuccess();
    }
  });

  // Attach hover sounds to buttons
  document.querySelectorAll('button, a, .project-card, .skill-chip, .quick-cmd-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (window.soundEngine) window.soundEngine.playHover();
    });
  });
}

// ==========================================
// 4. LIVE CLOCK (VIRUDHUNAGAR / IST)
// ==========================================
function initClock() {
  const clockEl = document.getElementById('live-time-display');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    // Format to IST
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockEl.textContent = now.toLocaleTimeString('en-US', options) + ' IST (UTC+5:30)';
  }

  updateTime();
  setInterval(updateTime, 1000);
}

function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ==========================================
// 5. METRICS / STATS COUNTER
// ==========================================
function initMetrics() {
  const container = document.getElementById('hero-metrics-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.personal.metrics.map(m => `
    <div class="metric-pill">
      <div class="metric-icon"><i class="fas ${m.icon}"></i></div>
      <div class="metric-info">
        <span class="metric-val">${m.value}</span>
        <span class="metric-label">${m.label}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 6. SKILLS MATRIX
// ==========================================
function initSkills() {
  const tabsContainer = document.getElementById('skills-tabs');
  const contentContainer = document.getElementById('skills-content');
  if (!tabsContainer || !contentContainer) return;

  const categories = PORTFOLIO_DATA.skills.categories;

  // Render Tabs
  tabsContainer.innerHTML = categories.map((cat, i) => `
    <button class="skill-tab-btn ${i === 0 ? 'active' : ''}" data-cat="${cat.id}">
      <i class="fas ${cat.icon}"></i> <span>${cat.name}</span>
    </button>
  `).join('');

  // Render Skill Cards per Category
  function renderSkills(catId) {
    const targetCat = categories.find(c => c.id === catId) || categories[0];
    contentContainer.innerHTML = `
      <div class="skills-grid">
        ${targetCat.skills.map(s => `
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-name-wrap">
                <i class="${s.icon} skill-icon"></i>
                <span class="skill-title">${s.name}</span>
              </div>
              <span class="skill-badge">${s.badge}</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" style="width: 0%;" data-level="${s.level}"></div>
            </div>
            <div class="skill-footer">
              <span class="skill-percent-label">Proficiency</span>
              <span class="skill-percent-val">${s.level}%</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Trigger fill animation
    setTimeout(() => {
      contentContainer.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-level') + '%';
      });
    }, 50);
  }

  renderSkills(categories[0].id);

  tabsContainer.querySelectorAll('.skill-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (window.soundEngine) window.soundEngine.playClick();
      renderSkills(btn.getAttribute('data-cat'));
    });
  });
}

// ==========================================
// 7. PROJECTS SHOWCASE & FILTER
// ==========================================
function initProjects() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  function renderProjects(filter = 'all') {
    const list = filter === 'all' 
      ? PORTFOLIO_DATA.projects 
      : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

    grid.innerHTML = list.map(p => `
      <div class="project-card" data-tilt data-id="${p.id}">
        <div class="project-card-inner">
          <div class="project-top">
            <div class="project-badge-row">
              <span class="project-cat-badge">${p.categoryName}</span>
              ${p.featured ? '<span class="project-featured-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-tagline">${p.tagline}</p>
          </div>

          <div class="project-highlights">
            <ul>
              ${p.highlights.slice(0, 2).map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('')}
            </ul>
          </div>

          <div class="project-tech-tags">
            ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-actions">
            <button class="btn-case-study" data-project-id="${p.id}">
              <i class="fas fa-diagram-project"></i> Architecture & Deep Dive
            </button>
            <div class="project-ext-links">
              <a href="${p.links.github}" target="_blank" class="icon-btn" title="View Source Code">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:${PORTFOLIO_DATA.personal.email}?subject=Project%20Inquiry%20-%20${encodeURIComponent(p.title)}" class="icon-btn" title="Discuss Project">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click for case study modals
    grid.querySelectorAll('.btn-case-study').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-project-id');
        openCaseStudyModal(pid);
      });
    });

    // Re-bind 3D tilt
    initCardTilt();
  }

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (window.soundEngine) window.soundEngine.playClick();
      renderProjects(btn.getAttribute('data-filter'));
    });
  });
}

// ==========================================
// 8. EXPERIENCE TIMELINE
// ==========================================
function initExperienceTimeline() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="timeline-item ${exp.current ? 'current-role' : ''}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-company-row">
              <h3 class="timeline-company">${exp.company}</h3>
              <span class="timeline-badge">${exp.badge}</span>
            </div>
            <div class="timeline-role">${exp.role}</div>
          </div>
          <div class="timeline-meta">
            <span class="timeline-duration"><i class="far fa-calendar-alt"></i> ${exp.duration}</span>
            <span class="timeline-location"><i class="fas fa-location-dot"></i> ${exp.location}</span>
          </div>
        </div>

        <p class="timeline-summary">${exp.description}</p>

        <div class="timeline-achievements">
          <h4>Key Responsibilities & Impact:</h4>
          <ul>
            ${exp.achievements.map(a => `<li><i class="fas fa-arrow-right"></i> ${a}</li>`).join('')}
          </ul>
        </div>

        <div class="timeline-skills">
          ${exp.skillsUsed.map(s => `<span class="exp-skill-tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 9. EDUCATION & CERTIFICATIONS
// ==========================================
function initEducationAndCertifications() {
  const eduContainer = document.getElementById('education-grid');
  const certContainer = document.getElementById('certifications-grid');

  if (eduContainer) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="edu-card">
        <div class="edu-badge"><i class="fas fa-graduation-cap"></i> ${edu.badge}</div>
        <h3 class="edu-degree">${edu.degree}</h3>
        <div class="edu-school">${edu.institution}</div>
        <div class="edu-footer">
          <span class="edu-score"><i class="fas fa-award"></i> ${edu.score}</span>
          <span class="edu-year"><i class="far fa-calendar"></i> ${edu.year}</span>
        </div>
        <p class="edu-highlight">${edu.highlight}</p>
      </div>
    `).join('');
  }

  if (certContainer) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
      <div class="cert-card">
        <div class="cert-header">
          <div class="cert-icon-wrap"><i class="fas fa-certificate"></i></div>
          <div>
            <h3 class="cert-title">${cert.title}</h3>
            <span class="cert-issuer">${cert.issuer} • <strong style="color: var(--accent-cyan);">${cert.date}</strong></span>
          </div>
        </div>
        <p class="cert-desc">${cert.description}</p>
        <div class="cert-skills">
          ${cert.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

// ==========================================
// 10. MODALS (Case Study & Resume)
// ==========================================
function openCaseStudyModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('case-study-modal');
  const body = document.getElementById('case-study-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="case-study-header">
      <span class="project-cat-badge">${project.categoryName}</span>
      <h2>${project.title}</h2>
      <p class="case-tagline">${project.tagline}</p>
    </div>

    <div class="case-study-section">
      <h3><i class="fas fa-triangle-exclamation highlight-cyan"></i> The Problem & Engineering Challenge</h3>
      <p>${project.caseStudy.problem}</p>
    </div>

    <div class="case-study-section">
      <h3><i class="fas fa-network-wired highlight-violet"></i> System Architecture & Pipeline Flow</h3>
      <div class="architecture-box">
        <code>${project.caseStudy.architecture}</code>
      </div>
    </div>

    <div class="case-study-section">
      <h3><i class="fas fa-list-check highlight-cyan"></i> Key Technical Innovations & Highlights</h3>
      <ul class="case-highlights-list">
        ${project.highlights.map(h => `<li><i class="fas fa-check"></i> ${h}</li>`).join('')}
      </ul>
    </div>

    <div class="case-study-section">
      <h3><i class="fas fa-chart-line highlight-green"></i> Measured Impact & Results</h3>
      <div class="impact-box">
        <p>${project.caseStudy.impact}</p>
      </div>
    </div>

    <div class="case-study-section">
      <h3><i class="fas fa-cubes highlight-cyan"></i> Technologies Used</h3>
      <div class="project-tech-tags">
        ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="case-modal-footer">
      <a href="mailto:${PORTFOLIO_DATA.personal.email}?subject=Deep%20Dive%20Discussion%20-%20${encodeURIComponent(project.title)}" class="btn-primary">
        <i class="fas fa-comments"></i> Discuss Technical Implementation
      </a>
      <a href="${project.links.github}" target="_blank" class="btn-secondary">
        <i class="fab fa-github"></i> GitHub Profile
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.soundEngine) window.soundEngine.playPop();
}

function initModals() {
  // Case Study Close
  const csModal = document.getElementById('case-study-modal');
  const csClose = document.getElementById('case-study-modal-close');
  if (csClose && csModal) {
    csClose.addEventListener('click', () => {
      csModal.classList.remove('active');
      document.body.style.overflow = '';
      if (window.soundEngine) window.soundEngine.playClick();
    });
    csModal.addEventListener('click', (e) => {
      if (e.target === csModal) {
        csModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Resume Modal
  const resumeModal = document.getElementById('resume-modal');
  const resumeBtns = document.querySelectorAll('.open-resume-btn');
  const resumeClose = document.getElementById('resume-modal-close');

  if (resumeModal) {
    resumeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (window.soundEngine) window.soundEngine.playPop();
      });
    });

    if (resumeClose) {
      resumeClose.addEventListener('click', () => {
        resumeModal.classList.remove('active');
        document.body.style.overflow = '';
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }

    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Print button inside resume modal
  const printBtn = document.getElementById('print-resume-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function renderResumeContent() {
  const container = document.getElementById('resume-render-area');
  if (!container) return;

  container.innerHTML = `
    <div class="resume-paper">
      <header class="resume-hdr">
        <h1 class="resume-name">${PORTFOLIO_DATA.personal.name}</h1>
        <div class="resume-sub">${PORTFOLIO_DATA.personal.title}</div>
        <div class="resume-contact-row">
          <span><i class="fas fa-envelope"></i> ${PORTFOLIO_DATA.personal.email}</span>
          <span><i class="fas fa-phone"></i> ${PORTFOLIO_DATA.personal.phone}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${PORTFOLIO_DATA.personal.location}</span>
          <span><i class="fab fa-linkedin"></i> ${PORTFOLIO_DATA.personal.linkedinHandle}</span>
        </div>
      </header>

      <section class="resume-sec">
        <h2 class="resume-sec-title">Profile</h2>
        <p class="resume-p">${PORTFOLIO_DATA.personal.bio}</p>
      </section>

      <section class="resume-sec">
        <h2 class="resume-sec-title">Technical Skills</h2>
        <div class="resume-skills-list">
          <p><strong>Languages:</strong> Python, Java, TypeScript, JavaScript, SQL</p>
          <p><strong>Front-End:</strong> Angular, TypeScript, JavaScript, ReactJs, HTML5, CSS3, Responsive UI Design</p>
          <p><strong>Back-End:</strong> Spring Boot, FastAPI, Flask, REST API Development</p>
          <p><strong>Database:</strong> PostgreSQL, MySQL</p>
          <p><strong>Enterprise & Tools:</strong> GitHub, Docker, CI/CD Pipelines, Role-based Authentication, ONNX Runtime, OpenCV, Jasper Reports, MCP (Model Context Protocol)</p>
          <p><strong>Additional:</strong> Data Validation, Data Annotation, Agile Collaboration, Computer Vision, WebSocket Streaming</p>
        </div>
      </section>

      <section class="resume-sec">
        <h2 class="resume-sec-title">Professional Experience</h2>
        ${PORTFOLIO_DATA.experience.map(exp => `
          <div class="resume-exp-block">
            <div class="resume-exp-hdr">
              <div><strong>${exp.role}</strong> — <em>${exp.company}</em></div>
              <div class="resume-date">${exp.duration} | ${exp.location}</div>
            </div>
            <ul class="resume-bullets">
              ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </section>

      <section class="resume-sec">
        <h2 class="resume-sec-title">Key Projects</h2>
        ${PORTFOLIO_DATA.projects.map(p => `
          <div class="resume-proj-block">
            <div class="resume-proj-hdr">
              <strong>${p.title}</strong>
              <span class="resume-proj-stack"><strong>Tech Stack:</strong> ${p.techStack.join(', ')}</span>
            </div>
            <ul class="resume-bullets">
              ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </section>

      <section class="resume-sec">
        <h2 class="resume-sec-title">Education</h2>
        ${PORTFOLIO_DATA.education.map(edu => `
          <div class="resume-edu-block">
            <div class="resume-exp-hdr">
              <div><strong>${edu.degree}</strong> — <em>${edu.institution}</em></div>
              <div class="resume-date">${edu.score} (${edu.year}) | ${edu.location}</div>
            </div>
          </div>
        `).join('')}
      </section>

      <section class="resume-sec">
        <h2 class="resume-sec-title">Certificates</h2>
        ${PORTFOLIO_DATA.certifications.map(c => `
          <div class="resume-edu-block">
            <div><strong>${c.title}</strong></div>
            <p class="resume-p" style="margin-top: 4px;">${c.description}</p>
          </div>
        `).join('')}
      </section>
    </div>
  `;
}

// ==========================================
// 11. CONTACT FORM & INSTANT EMAIL
// ==========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim() || 'Software Engineer Inquiry';
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    // Compose mailto URI
    const mailtoUri = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - From ${name}`)}&body=${encodeURIComponent(`Hi Gopikiran,\n\n${message}\n\nFrom:\nName: ${name}\nEmail: ${email}`)}`;

    window.location.href = mailtoUri;
    showToast('Opening your email client to send message...', 'success');
    if (window.soundEngine) window.soundEngine.playSuccess();
    form.reset();
  });
}

// ==========================================
// 12. COPY TO CLIPBOARD & TOAST NOTIFICATION
// ==========================================
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: "${text}"`, 'success');
        if (window.soundEngine) window.soundEngine.playSuccess();
      }).catch(() => {
        showToast('Failed to copy. Please manually copy.', 'error');
      });
    });
  });
}

function showToast(message, type = 'info') {
  let toast = document.getElementById('custom-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'custom-toast';
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-triangle-exclamation' : 'fa-info-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
  toast.className = `toast-active toast-${type}`;

  setTimeout(() => {
    toast.className = '';
  }, 3500);
}

// ==========================================
// 13. SCROLLSPY & NAVIGATION
// ==========================================
function initScrollSpyAndNav() {
  const nav = document.getElementById('main-nav');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinksContainer = document.getElementById('nav-links-wrap');

  // Sticky blur navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }

    // Scrollspy active state
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      if (window.soundEngine) window.soundEngine.playClick();
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

// ==========================================
// 14. 3D CARD TILT EFFECT
// ==========================================
function initCardTilt() {
  const cards = document.querySelectorAll('[data-tilt]');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ==========================================
// 15. SCROLL REVEAL ANIMATION
// ==========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

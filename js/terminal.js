/**
 * INTERACTIVE CLI TERMINAL ENGINE
 * A rich interactive command-line interface designed for technical recruiters and developers.
 */

class InteractiveTerminal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.output = this.container.querySelector('.terminal-output');
    this.input = this.container.querySelector('.terminal-input');
    this.form = this.container.querySelector('.terminal-input-row');
    
    this.history = [];
    this.historyIndex = -1;
    this.commands = [
      'help',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'contact',
      'cat resume',
      'sudo hire-me',
      'theme',
      'matrix',
      'clear'
    ];

    this.init();
  }

  init() {
    if (!this.input || !this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawCmd = this.input.value.trim();
      if (!rawCmd) return;

      this.executeCommand(rawCmd);
      this.history.push(rawCmd);
      this.historyIndex = this.history.length;
      this.input.value = '';
    });

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        this.autocomplete();
      }
    });

    // Terminal quick buttons
    const quickBtns = this.container.querySelectorAll('.quick-cmd-btn');
    quickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (cmd) {
          if (window.soundEngine) window.soundEngine.playClick();
          this.executeCommand(cmd);
          this.input.focus();
        }
      });
    });
  }

  autocomplete() {
    const val = this.input.value.toLowerCase().trim();
    if (!val) return;
    const match = this.commands.find(c => c.startsWith(val));
    if (match) {
      this.input.value = match;
    }
  }

  printLine(html, type = 'normal') {
    const line = document.createElement('div');
    line.className = `term-line term-${type}`;
    line.innerHTML = html;
    this.output.appendChild(line);
    this.output.scrollTop = this.output.scrollHeight;
  }

  executeCommand(cmdText) {
    if (window.soundEngine) window.soundEngine.playClick();

    // Print Prompt Echo
    this.printLine(`<span class="term-prompt">gopikiran@dev:~$</span> <span class="term-entered-cmd">${this.escapeHTML(cmdText)}</span>`);

    const parts = cmdText.toLowerCase().trim().split(' ');
    const cmd = parts[0];
    const arg = parts.slice(1).join(' ');

    switch (cmd) {
      case 'help':
        this.printLine(`
<div class="term-help-grid">
  <span class="cmd-name">about</span> <span>Overview & background bio</span>
  <span class="cmd-name">skills</span> <span>Technical skill breakdown</span>
  <span class="cmd-name">projects</span> <span>List key production projects</span>
  <span class="cmd-name">experience</span> <span>Work history & enterprise roles</span>
  <span class="cmd-name">education</span> <span>Academic qualifications</span>
  <span class="cmd-name">contact</span> <span>Email, phone, and LinkedIn info</span>
  <span class="cmd-name">cat resume</span> <span>Print ASCII formatted resume</span>
  <span class="cmd-name">sudo hire-me</span> <span>🎉 Fast-track interview / hire action</span>
  <span class="cmd-name">theme [name]</span> <span>Switch: cosmic, cyber, matrix, light</span>
  <span class="cmd-name">matrix</span> <span>Toggle digital rain overlay</span>
  <span class="cmd-name">clear</span> <span>Clear the terminal buffer</span>
</div>`, 'info');
        break;

      case 'about':
      case 'bio':
        this.printLine(`
<div class="term-box">
  <p><strong class="highlight-cyan">${PORTFOLIO_DATA.personal.name}</strong> — ${PORTFOLIO_DATA.personal.title}</p>
  <p>${PORTFOLIO_DATA.personal.bio}</p>
  <p class="term-muted"><i class="fas fa-map-marker-alt"></i> ${PORTFOLIO_DATA.personal.location} | Status: <span class="badge-success">${PORTFOLIO_DATA.personal.statusBadge}</span></p>
</div>`, 'normal');
        break;

      case 'skills':
        let skillsHtml = '<div class="term-skills-output">';
        PORTFOLIO_DATA.skills.categories.forEach(cat => {
          const list = cat.skills.map(s => `<span class="term-tag">${s.name} (${s.level}%)</span>`).join(' ');
          skillsHtml += `<div><strong class="highlight-violet">[${cat.name}]:</strong> ${list}</div>`;
        });
        skillsHtml += '</div>';
        this.printLine(skillsHtml, 'info');
        break;

      case 'projects':
        let projHtml = '<div class="term-projects-output">';
        PORTFOLIO_DATA.projects.forEach((p, idx) => {
          projHtml += `
<div class="term-proj-item">
  <div><span class="highlight-cyan">${idx + 1}. ${p.title}</span> <span class="term-badge">[${p.categoryName}]</span></div>
  <div class="term-muted">${p.tagline}</div>
  <div><small>Stack: ${p.techStack.join(', ')}</small></div>
</div>`;
        });
        projHtml += '</div>';
        this.printLine(projHtml, 'info');
        break;

      case 'experience':
      case 'exp':
        let expHtml = '<div class="term-exp-output">';
        PORTFOLIO_DATA.experience.forEach(e => {
          expHtml += `
<div class="term-exp-item">
  <div><strong class="highlight-cyan">${e.role}</strong> @ <span class="highlight-violet">${e.company}</span></div>
  <div class="term-muted"><i class="far fa-calendar"></i> ${e.duration} | <i class="fas fa-map-marker-alt"></i> ${e.location}</div>
  <ul class="term-list">${e.achievements.slice(0, 2).map(a => `<li>${a}</li>`).join('')}</ul>
</div>`;
        });
        expHtml += '</div>';
        this.printLine(expHtml, 'normal');
        break;

      case 'education':
      case 'edu':
        let eduHtml = '<div class="term-edu-output">';
        PORTFOLIO_DATA.education.forEach(ed => {
          eduHtml += `
<div class="term-edu-item">
  <div><strong class="highlight-cyan">${ed.degree}</strong></div>
  <div>${ed.institution} — <span class="highlight-violet">${ed.score}</span> (${ed.year})</div>
</div>`;
        });
        eduHtml += '</div>';
        this.printLine(eduHtml, 'normal');
        break;

      case 'contact':
        this.printLine(`
<div class="term-contact-output">
  <div>📧 <strong>Email:</strong> <a href="mailto:${PORTFOLIO_DATA.personal.email}" class="term-link">${PORTFOLIO_DATA.personal.email}</a></div>
  <div>📞 <strong>Phone:</strong> <a href="tel:${PORTFOLIO_DATA.personal.phoneRaw}" class="term-link">${PORTFOLIO_DATA.personal.phone}</a></div>
  <div>💼 <strong>LinkedIn:</strong> <a href="${PORTFOLIO_DATA.personal.linkedin}" target="_blank" class="term-link">${PORTFOLIO_DATA.personal.linkedin}</a></div>
  <div>🐙 <strong>GitHub:</strong> <a href="${PORTFOLIO_DATA.personal.github}" target="_blank" class="term-link">${PORTFOLIO_DATA.personal.github}</a></div>
</div>`, 'info');
        break;

      case 'cat':
        if (arg.includes('resume')) {
          this.printLine(`
<pre class="term-ascii-resume">
============================================================
              GOPIKIRAN S — RESUME SNAPSHOT
============================================================
Role: Software Engineer | Full Stack Developer
Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}

[CORE TECH]
- Frontend: Angular (Signals), React.js, TypeScript, HTML5/CSS3
- Backend:  Spring Boot, FastAPI, Flask, REST APIs, Role Security
- Database: MySQL, PostgreSQL
- AI / Edge: RT-DETR, ONNX Runtime, OpenCV, Python MCP, Groq LLM

[EXPERIENCE]
1. Software Engineer @ Asir Technologies (06/2025 - Present)
2. Automotive Data Analyst @ Clear Quote Technologies (01/2025 - 05/2025)

[EDUCATION]
- BE (ECE) - Mepco Schlenk Engineering College (CGPA: 7.0 - 2024)
- HSC (CS) - Kshatriya Vidhyasala CBSE (84.9% - 2020)
============================================================
Tip: Click "Download Resume" in the header to get the PDF copy!
</pre>`, 'success');
        } else {
          this.printLine(`cat: file not found: ${arg}. Try: <code>cat resume</code>`, 'error');
        }
        break;

      case 'sudo':
        if (arg === 'hire-me' || arg === 'hire') {
          if (window.soundEngine) window.soundEngine.playSuccess();
          this.printLine(`
<div class="term-sudo-hire">
  <div class="glow-text">🎉 [ACCESS GRANTED] EXCELLENT DECISION! 🎉</div>
  <p>Initializing direct connection to Gopikiran S...</p>
  <p>Status: <strong style="color: #00ff88;">Ready to build high-impact scalable software for your team.</strong></p>
  <a href="mailto:${PORTFOLIO_DATA.personal.email}?subject=Job%20Opportunity%20-%20Software%20Engineer&body=Hi%20Gopikiran,%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20regarding%20an%20opportunity." class="btn-term-cta">
    <i class="fas fa-paper-plane"></i> Send Direct Interview Invite
  </a>
</div>`, 'success');
        } else {
          this.printLine(`sudo: unknown command: ${arg}. Try <code>sudo hire-me</code>`, 'error');
        }
        break;

      case 'theme':
        if (['cosmic', 'cyber', 'matrix', 'light'].includes(arg)) {
          if (window.setTheme) {
            window.setTheme(arg);
            this.printLine(`Theme switched to: <strong class="highlight-cyan">${arg}</strong>`, 'success');
          }
        } else {
          this.printLine(`Usage: <code>theme cosmic</code> | <code>theme cyber</code> | <code>theme matrix</code> | <code>theme light</code>`, 'info');
        }
        break;

      case 'matrix':
        this.printLine(`Triggering Matrix rain mode...`, 'success');
        if (window.setTheme) window.setTheme('matrix');
        break;

      case 'clear':
        this.output.innerHTML = '';
        this.printLine(`Type <span class="highlight-cyan">'help'</span> to see available commands or click quick chips below.`, 'normal');
        break;

      default:
        this.printLine(`command not found: <code>${this.escapeHTML(cmdText)}</code>. Type <span class="highlight-cyan">'help'</span> for list of commands.`, 'error');
        break;
    }
  }

  escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.interactiveTerminal = new InteractiveTerminal('interactive-terminal');
});

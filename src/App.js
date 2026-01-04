import { useEffect } from 'react';
import './App.css';

const personalInfo = {
  name: 'Yash Chauhan',
  location: 'Bijnor, Uttar Pradesh',
  mobile: '+91-9389507913',
  email: 'yashchauhan6660@gmail.com',
};

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/yashchauhan66' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/Yash-Chauhan6660/' },
];

const summary =
  'Full Stack Web Developer (MERN) focused on performant, scalable, and user-centric experiences. I ship responsive UIs, integrate resilient APIs, and obsess over measurable optimizations.';

const heroStats = [
  { value: '5+', label: 'MERN builds shipped' },
  { value: '30%↑', label: 'API efficiency improvements' },
  { value: '10+', label: 'Vercel deployments' },
];

const experiences = [
  {
    company: 'Freelance Web Developer (Remote)',
    role: 'Full Stack MERN Developer',
    period: 'Jan 2025 — Aug 2025',
    summary:
      'Partnering with founders and small businesses to design, develop, and maintain full-stack products with modern tooling.',
    achievements: [
      'Delivered end-to-end MERN applications tailored to client workflows',
      'Optimized REST APIs for up to 30% faster response times and page loads',
      'Co-created feature roadmaps with clients and handled ongoing maintenance',
    ],
  },
];

const projects = [
  {
    name: 'Task Management App',
    description:
      'A full-featured task management application with drag-and-drop functionality, due dates, and team collaboration features built with MERN stack.',
    tags: ['MERN', 'MongoDB', 'Express.js', 'React', 'Node.js'],
    link: 'https://task-management-dashboard-amber.vercel.app/',
  },
  {
    name: 'Food Delivery App',
    description:
      'A responsive food delivery application with real-time order tracking and restaurant listings.',
    tags: ['React', 'REST APIs', 'Performance'],
    link: 'https://fooddelivery-blush-rho.vercel.app/',
  },
  {
    name: 'Gym Managment App',
    description:
      'Fitness experience built with RapidAPI data, curated workout plans, and a frictionless discovery flow.',
    tags: ['React', 'RapidAPI', 'UX'],
    link: 'https://gym-application-adj9.vercel.app/',
  },
];

const skills = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript (ES6+)', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST API Design', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Core',
    items: ['GitHub', 'Postman', 'Vercel', 'Power BI', 'Tableau', 'MS Excel', 'DSA', 'DBMS', 'OOP'],
  },
];

const education = [
  {
    school: 'Galgotias College of Engineering & Technology',
    program: 'MCA',
    period: 'Oct 2023 — Apr 2025',
    detail: 'CGPA 7.4 · Greater Noida, India',
  },
  {
    school: 'R.S.M. (P.G) College',
    program: 'B.Sc',
    period: 'Jul 2019 — Jun 2022',
    detail: '61.6% · Dhampur, India',
  },
];

const certifications = [
  {
    name: 'ISRO AI/ML Online Course',
    year: '2024',
    link: 'https://drive.google.com/file/d/19wjtr96pyFGBwZschobAfTidBTDJ5eFR/view',
  },
  {
    name: 'Deloitte Data Analytics & Visualization',
    year: '2025',
    link: 'https://drive.google.com/file/d/1kznrP8soygOUNDS8PqwV4Pkl-GrHEoK/view',
  },
];

function App() {
  useEffect(() => {
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (shouldReduceMotion) {
      return undefined;
    }

    const sections = document.querySelectorAll('.slide-section');
    if (!sections.length) {
      return undefined;
    }

    document.body.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section, index) => {
      section.style.setProperty('--slide-delay', `${index * 0.08}s`);
      observer.observe(section);
    });

    return () => {
      document.body.classList.remove('motion-ready');
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-shell">
      <nav className="floating-nav" aria-label="Primary">
        <div>
          <p className="eyebrow">Portfolio</p>
          <p className="brand">{personalInfo.name}</p>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="cta" href={`mailto:${personalInfo.email}`}>
          Let’s collaborate
        </a>
      </nav>

      <main>
        <section className="hero slide-section" id="home">
          <div className="hero-content">
            <div className="hero-text">
              <p className="eyebrow">Full Stack Web Developer · MERN</p>
              <h1>Building responsive, data-driven products that feel fast and purposeful.</h1>
              <p className="intro">{summary}</p>
              <div className="hero-ctas">
                <a className="cta" href="#work">
                  View selected work
                </a>
                <a className="ghost" href="https://github.com/yashchauhan66" target="_blank" rel="noreferrer">
                  Explore GitHub
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <img
                  src="/profile-photo.png"
                  alt="Yash Chauhan - Full Stack Web Developer"
                  className="hero-image"
                  onLoad={(e) => {
                    const container = e.target.parentElement;
                    if (!container) return;
                    e.target.style.display = 'block';
                    container.classList.remove('show-placeholder');
                    const placeholder = container.querySelector('.hero-image-placeholder');
                    if (placeholder) {
                      placeholder.style.display = 'none';
                    }
                    const overlay = container.querySelector('.hero-image-overlay');
                    if (overlay) {
                      overlay.style.display = '';
                    }
                  }}
                  onError={(e) => {
                    const container = e.target.parentElement;
                    if (!container) return;
                    e.target.style.display = 'none';
                    container.classList.add('show-placeholder');
                    const placeholder = container.querySelector('.hero-image-placeholder');
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                    const overlay = container.querySelector('.hero-image-overlay');
                    if (overlay) {
                      overlay.style.display = 'none';
                    }
                  }}
                />
                <div className="hero-image-placeholder" style={{display: 'none'}}>
                  <span>Add your professional photo as profile-photo.png in the public folder</span>
                </div>
              <div className="hero-image-overlay" aria-hidden="true"></div>
                <div className="hero-image-glow"></div>
              </div>
            </div>
          </div>
          <div className="hero-stats" aria-label="Key metrics">
            {heroStats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about slide-section" id="about">
          <header>
            <p className="eyebrow">Profile</p>
            <h2>Personal details & ways to reach me</h2>
          </header>
          <div className="details-grid">
            <article>
              <h3>Details</h3>
              <ul>
                <li>
                  <span>Location</span>
                  <strong>{personalInfo.location}</strong>
                </li>
                <li>
                  <span>Mobile</span>
                  <a href={`tel:${personalInfo.mobile.replace(/\s+/g, '')}`}>{personalInfo.mobile}</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </li>
              </ul>
            </article>
            <article>
              <h3>Focus</h3>
              <p>
                React-first development, REST integrations, MongoDB data modeling, and fast deployments via Vercel
                with CI-friendly workflows.
              </p>
            </article>
            <article>
              <h3>Links</h3>
              <div className="link-row">
                {profileLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="panel-grid slide-section" id="work">
          <header>
            <p className="eyebrow">Selected Work</p>
            <h2>High-impact case studies</h2>
            <p>
              A mix of conversational AI, data-rich dashboards, and user-first utilities—each combining clean UI with
              solid engineering foundations.
            </p>
          </header>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.name} className="card">
                <div className="card-header">
                  <h3>{project.name}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    ↗
                  </a>
                </div>
                <p>{project.description}</p>
                <ul className="tag-row">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience slide-section" id="experience">
          <header>
            <p className="eyebrow">Experience</p>
            <h2>Hands-on shipping with real-world impact</h2>
          </header>
          <div className="experience-list">
            {experiences.map((exp) => (
              <article key={exp.company} className="experience-card">
                <div className="experience-meta">
                  <h3>{exp.role}</h3>
                  <p>{exp.company}</p>
                  <span>{exp.period}</span>
                </div>
                <p>{exp.summary}</p>
                <ul>
                  {exp.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="skills slide-section" id="skills">
          <header>
            <p className="eyebrow">Expertise</p>
            <h2>Where I add the most value</h2>
          </header>
          <div className="skill-grid">
            {skills.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education slide-section" id="education">
          <header>
            <p className="eyebrow">Education</p>
            <h2>Academic foundation</h2>
          </header>
          <div className="timeline">
            {education.map((item) => (
              <article key={item.school} className="timeline-card">
                <div>
                  <h3>{item.program}</h3>
                  <p>{item.school}</p>
                </div>
                <span>{item.period}</span>
                <p className="detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications slide-section" id="certifications">
          <header>
            <p className="eyebrow">Certifications</p>
            <h2>Proof of continuous learning</h2>
          </header>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.name} className="card compact">
                <div className="card-header">
                  <h3>{cert.name}</h3>
                  <span>{cert.year}</span>
                </div>
                <a href={cert.link} target="_blank" rel="noreferrer">
                  View credential ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact slide-section" id="contact">
          <div>
            <p className="eyebrow">Let’s build something memorable</p>
            <h2>Available for freelance, remote, or onsite opportunities.</h2>
            <p>Based in {personalInfo.location}. Open to collaborating with product teams, agencies, or ambitious founders.</p>
          </div>
          <div className="contact-actions">
            <a className="cta" href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
            <a className="ghost" href={`tel:${personalInfo.mobile.replace(/\s+/g, '')}`}>
              {personalInfo.mobile}
            </a>
            <a className="ghost" href="https://www.linkedin.com/in/Yash-Chauhan6660/ " target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {personalInfo.name}. Crafted with care in React.</p>
        <p>Built for speed, accessibility, and storytelling.</p>
      </footer>
    </div>
  );
}

export default App;

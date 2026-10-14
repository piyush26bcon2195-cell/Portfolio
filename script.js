/**
 * ===================================================================
 * PIYUSH YADAV - PERSONAL PORTFOLIO JAVASCRIPT
 * Features:
 * - Dynamic Typewriter effect for roles
 * - Light / Dark Theme Switcher with localStorage persistence
 * - Mobile Navigation Menu & Backdrop
 * - Active Navigation Link Highlighting on Scroll (ScrollSpy)
 * - Scroll Reveal Animations (IntersectionObserver)
 * - Animated Skill Progress Bars on Scroll
 * - Back-to-Top Floating Button
 * - Contact Form Client-side Validation & Feedback
 * - One-click Email Copy to Clipboard
 * - Toast Notification System
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  initMobileNav();
  initScrollSpy();
  initScrollReveal();
  initSkillBars();
  initBackToTop();
  initContactForm();
  initEmailCopy();
  initDynamicYear();
});

/* ===================================================================
   1. THEME SWITCHER (DARK / LIGHT)
   =================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlElement = document.documentElement;
  const storageKey = 'piyush_portfolio_theme';

  // Load saved theme or default to 'dark'
  const savedTheme = localStorage.getItem(storageKey) || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem(storageKey, newTheme);

      showToast(
        newTheme === 'dark' ? '🌙 Dark Mode Activated' : '☀️ Light Mode Activated',
        'info'
      );
    });
  }
}

/* ===================================================================
   2. TYPEWRITER EFFECT (HERO SECTION)
   =================================================================== */
function initTypewriter() {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  // Roles to display in hero typing animation
  const roles = [
    'First-Year B.Tech CSE Student',
    'Aspiring Web Developer',
    'Python & AI Enthusiast',
    'Curious Problem Solver',
    'Tech Explorer @ JECRC'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 100;
  const deletingDelay = 50;
  const pauseEndDelay = 1800;
  const pauseStartDelay = 400;

  function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      // Typing forward
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        // Finished typing word, pause before deleting
        isDeleting = true;
        setTimeout(type, pauseEndDelay);
        return;
      }
      setTimeout(type, typingDelay);
    } else {
      // Deleting characters
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // Finished deleting, move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, pauseStartDelay);
        return;
      }
      setTimeout(type, deletingDelay);
    }
  }

  // Start typing after initial slight delay
  setTimeout(type, 600);
}

/* ===================================================================
   3. MOBILE NAVIGATION MENU & BACKDROP
   =================================================================== */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu || !menuBackdrop) return;

  function toggleMenu(isOpen) {
    const shouldOpen = isOpen !== undefined ? isOpen : !navMenu.classList.contains('open');

    hamburgerBtn.classList.toggle('active', shouldOpen);
    navMenu.classList.toggle('open', shouldOpen);
    menuBackdrop.classList.toggle('active', shouldOpen);
    hamburgerBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');

    // Prevent body scroll when mobile menu is opened
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', () => toggleMenu());
  menuBackdrop.addEventListener('click', () => toggleMenu(false));

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  });

  // Close menu on pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* ===================================================================
   4. ACTIVE NAV-LINK SCROLLSPY & NAVBAR SHADOW
   =================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  function updateActiveLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Navbar shadow on scroll
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // ScrollSpy calculation
    let currentSectionId = '';
    const offset = 180; // Trigger threshold

    sections.forEach(section => {
      const sectionTop = section.offsetTop - offset;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Fallback for top of page
    if (scrollY < 100) {
      currentSectionId = 'home';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // Initial call
}

/* ===================================================================
   5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   =================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Reveal only once for performance
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ===================================================================
   6. ANIMATED SKILL BARS ON SCROLL
   =================================================================== */
function initSkillBars() {
  const skillsSection = document.getElementById('skills');
  const progressFills = document.querySelectorAll('.progress-bar-fill');

  if (!skillsSection || !progressFills.length) return;

  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressFills.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            if (progress) {
              bar.style.width = progress;
            }
          });
          observer.unobserve(skillsSection);
        }
      });
    },
    {
      root: null,
      threshold: 0.2
    }
  );

  skillObserver.observe(skillsSection);
}

/* ===================================================================
   7. BACK-TO-TOP BUTTON
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  function toggleButton() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleButton, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ===================================================================
   8. CONTACT FORM CLIENT-SIDE VALIDATION & FEEDBACK
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const messageInput = document.getElementById('userMessage');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccessMsg');

  // Simple Email Regex Validator
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).trim().toLowerCase());
  }

  function validateInput(input, condition) {
    if (condition) {
      input.classList.remove('invalid');
      return true;
    } else {
      input.classList.add('invalid');
      return false;
    }
  }

  // Live validation on blur & input
  nameInput?.addEventListener('input', () => {
    validateInput(nameInput, nameInput.value.trim().length >= 2);
  });

  emailInput?.addEventListener('input', () => {
    validateInput(emailInput, isValidEmail(emailInput.value));
  });

  messageInput?.addEventListener('input', () => {
    validateInput(messageInput, messageInput.value.trim().length >= 10);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateInput(nameInput, nameInput.value.trim().length >= 2);
    const isEmailValid = validateInput(emailInput, isValidEmail(emailInput.value));
    const isMsgValid = validateInput(messageInput, messageInput.value.trim().length >= 10);

    if (!isNameValid || !isEmailValid || !isMsgValid) {
      showToast('⚠️ Please fill out all required fields correctly.', 'warning');
      return;
    }

    // Toggle button to loading state
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    if (btnText && btnLoader) {
      btnText.style.display = 'none';
      btnLoader.style.display = 'inline-flex';
      submitBtn.disabled = true;
    }

    // Simulate sending message (or submitting to Formspree)
    setTimeout(() => {
      // Revert button
      if (btnText && btnLoader) {
        btnText.style.display = 'inline-flex';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
      }

      // Show success feedback
      if (successMsg) {
        successMsg.style.display = 'flex';
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 8000);
      }

      showToast('🎉 Message sent successfully! Thanks for reaching out.', 'success');

      // Reset form
      form.reset();
      [nameInput, emailInput, messageInput].forEach(inp => inp.classList.remove('invalid'));
    }, 1200);
  });
}

/* ===================================================================
   9. EMAIL COPY TO CLIPBOARD
   =================================================================== */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailLink = document.getElementById('emailContactLink');

  if (!copyBtn || !emailLink) return;

  copyBtn.addEventListener('click', async () => {
    const emailToCopy = emailLink.textContent.trim();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for older browsers
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = emailToCopy;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
      }

      // Visual feedback on copy button icon
      const icon = copyBtn.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-check';
        setTimeout(() => {
          icon.className = 'fa-regular fa-copy';
        }, 2000);
      }

      showToast('📋 Email copied to clipboard!', 'success');
    } catch (err) {
      showToast('Email: ' + emailToCopy, 'info');
    }
  });
}

/* ===================================================================
   10. TOAST NOTIFICATION SYSTEM
   =================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconHtml = '<i class="fa-solid fa-circle-info"></i>';
  if (type === 'success') {
    iconHtml = '<i class="fa-solid fa-circle-check"></i>';
  } else if (type === 'warning') {
    iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';
  }

  toast.innerHTML = `${iconHtml}<span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

/* ===================================================================
   11. DYNAMIC COPYRIGHT YEAR
   =================================================================== */
function initDynamicYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

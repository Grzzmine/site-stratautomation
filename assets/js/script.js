// /assets/js/script.js - VERSION FINALE AVEC GESTION DU FORMULAIRE EN JS

// --- Logique pour le menu (inchangée) ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
  
    if (menuToggle && navMenu && closeMenu) {
      const openMenu = () => { body.classList.add('menu-open'); navMenu.classList.add('is-active'); };
      const closeTheMenu = () => { body.classList.remove('menu-open'); navMenu.classList.remove('is-active'); };
      menuToggle.addEventListener('click', openMenu);
      closeMenu.addEventListener('click', closeTheMenu);
    }
  
    // --- NOUVEAU : Logique pour la soumission du formulaire ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
  
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Envoi en cours...';
  
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        .then(() => {
          // Soumission réussie !
          contactForm.innerHTML = '<div class="form-success"><h3>Merci !</h3><p>Votre message a bien été envoyé. Je vous recontacterai bientôt.</p></div>';
        })
        .catch((error) => {
          // En cas d'erreur
          alert('Désolé, une erreur est survenue. Veuillez réessayer.');
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
          console.error('Erreur de soumission:', error);
        });
      });
    }
  });
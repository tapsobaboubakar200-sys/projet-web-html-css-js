//  VALIDATION FORMULAIRE 
const form = document.querySelector('form');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l'envoi automatique

  let errors = [];

  // Vérification du nom
  if(nom.value.trim() === '') {
    errors.push("Veuillez entrer votre nom.");
  }

  // Vérification de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)) {
    errors.push("Veuillez entrer un email valide.");
  }

  // Vérification du message
  if(message.value.trim().length < 10) {
    errors.push("Le message doit contenir au moins 10 caractères.");
  }

  // Affichage des erreurs ou succès
  if(errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    alert("Merci pour votre message !");
    form.reset(); // Vide le formulaire
  }
});

//  BOUTON RETOUR EN HAUT 
const backToTop = document.createElement('button');
backToTop.textContent = "↑ Retour en haut";
backToTop.id = "backToTop";
backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.backgroundColor = "#e74c3c";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

//  CHANGER LE THEME 
const themeButton = document.createElement('button');
themeButton.textContent = "Changer thème";
themeButton.id = "themeButton";
themeButton.style.position = "fixed";
themeButton.style.bottom = "30px";
themeButton.style.left = "30px";
themeButton.style.padding = "10px 15px";
themeButton.style.backgroundColor = "#34495e";
themeButton.style.color = "white";
themeButton.style.border = "none";
themeButton.style.borderRadius = "5px";
themeButton.style.cursor = "pointer";
document.body.appendChild(themeButton);

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

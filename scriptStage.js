document.getElementById('submitBtn').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('emailSelect').value;
  var message = document.getElementById('message').value;

  // Construire l'URL mailto avec les informations du formulaire
  var mailtoURL = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent('Nouveau message depuis le formulaire de contact du site de la promotion DWWMPE9 HB') + '&body=' + encodeURIComponent('Nom: ' + name + '\n' + message);

  // Ouvrir le client de messagerie par défaut de l'utilisateur
  window.location.href = mailtoURL;
});

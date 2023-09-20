// Placez votre code à l'intérieur de l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('openWindow').addEventListener('click', function () {
      document.getElementById('window').style.display = 'block';
  });

  document.getElementById('closeWindow').addEventListener('click', function () {
      document.getElementById('window').style.display = 'none';
  });

  document.getElementById('textInput').addEventListener('input', function (event) {
      const inputText = event.target.value;
      console.log('Texte saisi :', inputText);
  });
});
